// Lectura de los formularios del admin.
import { randomUUID } from 'node:crypto';

/** Error con un mensaje que se le puede mostrar al cliente tal cual. */
export class ErrorAdmin extends Error {}

export const texto = (datos: FormData, nombre: string) => String(datos.get(nombre) ?? '').trim();

export function obligatorio(datos: FormData, nombre: string, etiqueta: string) {
	const valor = texto(datos, nombre);
	if (!valor) throw new ErrorAdmin(`Falta ${etiqueta}.`);
	return valor;
}

/** Puntos de una lista, sin los que se dejaron vacíos. */
export const lista = (datos: FormData, nombre: string) =>
	datos
		.getAll(nombre)
		.map((v) => String(v).trim())
		.filter(Boolean);

/** La imagen elegida, o undefined si no se eligió ninguna. */
export function imagen(datos: FormData) {
	const archivo = datos.get('imagen');
	return archivo instanceof File && archivo.size > 0 ? archivo : undefined;
}

export const nuevoId = () => randomUUID();

/** Texto de la confirmación al borrar una línea o categoría con sus tarjetas. */
export const avisoBorrarGrupo = (tarjetas: number, queEs: string) =>
	tarjetas === 0
		? `Se borrará ${queEs}. No tiene tarjetas.`
		: `Se borrará ${queEs} y también ${tarjetas === 1 ? 'su tarjeta' : `sus ${tarjetas} tarjetas`}.`;

/** Avisos que se muestran tras guardar; viajan en "?aviso=" para sobrevivir a la redirección. */
export const avisos = {
	guardado: 'Cambios guardados. La página ya los muestra.',
	agregado: 'Agregado. La página ya lo muestra.',
	borrado: 'Se borró correctamente.',
	creado: 'Línea creada. Ya puedes agregarle tarjetas.',
	'categoria-creada': 'Categoría creada. Ya puedes agregarle arreglos.',
	'grupo-borrado': 'Se borró junto con sus tarjetas.',
} as const;

export const avisoDe = (url: URL) => {
	const clave = url.searchParams.get('aviso') as keyof typeof avisos | null;
	return clave && clave in avisos ? { tipo: 'ok' as const, texto: avisos[clave] } : undefined;
};
