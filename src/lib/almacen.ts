// Almacén del contenido editable desde el admin (catálogo y flores) y de las imágenes que se suben.
// - En Vercel, con un Blob store *privado* conectado al proyecto (variables BLOB_STORE_ID o BLOB_READ_WRITE_TOKEN):
//   todo se guarda en Vercel Blob.
// - En local (Laragon, `npm run dev`): en la carpeta .almacen/ del proyecto, que no se sube a git.
// Las imágenes siempre se sirven desde /imagenes/<ruta> (src/pages/imagenes/[...ruta].ts).
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve, sep } from 'node:path';
import { del, get, put } from '@vercel/blob';
import sharp from 'sharp';
import { catalogoInicial, type Catalogo } from '../data/catalogo';
import { floresIniciales, type CategoriaDeFlores } from '../data/flores';
import { obituariosIniciales, type Obituario } from '../data/obituarios';
import { ErrorAdmin } from './formulario';

const usarBlob = Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);
const carpetaLocal = resolve(process.cwd(), '.almacen');

// Evita rutas que salgan de la carpeta del almacén ("../").
const rutaLocal = (ruta: string) => {
	const completa = resolve(carpetaLocal, ruta);
	if (!completa.startsWith(carpetaLocal + sep)) throw new Error('Ruta no válida');
	return completa;
};

/** Lee un archivo del almacén. `fresco` evita la caché de Vercel (cambios de hace menos de un minuto). */
export async function leerArchivo(ruta: string, fresco = false): Promise<Buffer | null> {
	if (usarBlob) {
		const r = await get(ruta, { access: 'private', useCache: !fresco });
		if (!r || r.statusCode !== 200) return null;
		return Buffer.from(await new Response(r.stream).arrayBuffer());
	}
	try {
		return await readFile(rutaLocal(ruta));
	} catch {
		return null;
	}
}

async function escribirArchivo(ruta: string, contenido: Buffer | string, tipo: string) {
	if (usarBlob) {
		await put(ruta, contenido, { access: 'private', contentType: tipo, addRandomSuffix: false, allowOverwrite: true, cacheControlMaxAge: 60 });
		return;
	}
	const destino = rutaLocal(ruta);
	await mkdir(dirname(destino), { recursive: true });
	await writeFile(destino, contenido);
}

async function borrarArchivo(ruta: string) {
	if (usarBlob) await del(ruta);
	else await rm(rutaLocal(ruta), { force: true });
}

// --- Contenido (JSON) ---

async function leerJSON<T>(nombre: string, inicial: () => T, fresco: boolean): Promise<T> {
	const datos = await leerArchivo(`datos/${nombre}.json`, fresco);
	return datos ? (JSON.parse(datos.toString('utf8')) as T) : inicial();
}

const guardarJSON = (nombre: string, valor: unknown) => escribirArchivo(`datos/${nombre}.json`, JSON.stringify(valor, null, '\t'), 'application/json');

/** `fresco` para el admin: así ve al instante lo que acaba de guardar. */
export const leerCatalogo = (fresco = false) => leerJSON<Catalogo>('catalogo', catalogoInicial, fresco);
export const guardarCatalogo = (catalogo: Catalogo) => guardarJSON('catalogo', catalogo);

export const leerFlores = (fresco = false) => leerJSON<CategoriaDeFlores[]>('flores', floresIniciales, fresco);
export const guardarFlores = (flores: CategoriaDeFlores[]) => guardarJSON('flores', flores);

export const leerObituarios = (fresco = false) => leerJSON<Obituario[]>('obituarios', obituariosIniciales, fresco);
export const guardarObituarios = (obituarios: Obituario[]) => guardarJSON('obituarios', obituarios);

// --- Imágenes ---

export const PESO_MAXIMO_IMAGEN = 1024 * 1024; // 1 MB

/** Convierte la imagen a WebP de 1200 px como máximo, la guarda y devuelve su URL pública. */
export async function guardarImagen(archivo: File, carpeta: 'catalogo' | 'flores' | 'obituarios'): Promise<string> {
	if (archivo.size > PESO_MAXIMO_IMAGEN) throw new ErrorAdmin('La imagen pesa más de 1 MB. Elige una más ligera.');
	let webp: Buffer;
	try {
		webp = await sharp(Buffer.from(await archivo.arrayBuffer()))
			.rotate() // respeta la orientación de las fotos del celular
			.resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
			.webp({ quality: 80 })
			.toBuffer();
	} catch {
		throw new ErrorAdmin('El archivo no es una imagen válida (usa JPG, PNG o WEBP).');
	}
	const ruta = join('imagenes', carpeta, `${randomUUID()}.webp`).replaceAll('\\', '/');
	await escribirArchivo(ruta, webp, 'image/webp');
	return `/${ruta}`;
}

/** Borra una imagen subida desde el admin. Las fotos originales de public/ no se tocan. */
export async function borrarImagen(url?: string) {
	if (!url?.startsWith('/imagenes/')) return;
	try {
		await borrarArchivo(url.slice(1));
	} catch {
		// Si ya no existe no pasa nada.
	}
}
