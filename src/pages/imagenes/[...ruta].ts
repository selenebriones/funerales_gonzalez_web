// Sirve las imágenes subidas desde el admin (guardadas en el almacén, ver src/lib/almacen.ts).
import type { APIRoute } from 'astro';
import { leerArchivo } from '../../lib/almacen';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
	const ruta = params.ruta ?? '';
	if (!/^(catalogo|flores|obituarios)\/[\w-]+\.webp$/.test(ruta)) return new Response(null, { status: 404 });
	const imagen = await leerArchivo(`imagenes/${ruta}`);
	if (!imagen) return new Response(null, { status: 404 });
	// Cada imagen tiene un nombre único y nunca cambia: se puede guardar en caché para siempre.
	return new Response(new Uint8Array(imagen), {
		headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=31536000, immutable' },
	});
};
