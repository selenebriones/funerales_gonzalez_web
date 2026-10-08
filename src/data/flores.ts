// Arreglos florales y precios: contenido inicial. Fuente: documento de contenido (Google Sites), página "Flores".
// Desde el admin (/admin/flores) el cliente lo edita y se guarda en el almacén (src/lib/almacen.ts); este archivo
// solo se usa mientras no haya nada guardado. `foto` es la URL de la imagen (public/flores/, tomada de
// funeralesgonzalez.com/ofrendas solo donde el nombre coincide, o /imagenes/ si se subió desde el admin).
// Varias fotos muestran dos variantes de color lado a lado.
// TODO (cliente): confirmar el precio del bouquet de 48 rosas ($75 en el documento, parece incompleto),
// los modelos que aparecen dos veces con el mismo nombre y precio, y fotos de las lágrimas.

export interface Arreglo {
	id: string;
	nombre: string;
	precio: number;
	foto?: string;
}

export interface CategoriaDeFlores {
	id: string;
	categoria: string;
	arreglos: Arreglo[];
}

const categoriasIniciales: { categoria: string; arreglos: Omit<Arreglo, 'id'>[] }[] = [
	{
		categoria: 'Bouquets',
		arreglos: [
			{ nombre: 'Bouquet rosa blanca o roja, 24 rosas', precio: 550, foto: '/flores/bouquet-rosas.webp' },
			{ nombre: 'Bouquet rosa blanca o roja, 48 rosas', precio: 75, foto: '/flores/bouquet-rosas.webp' },
			{ nombre: 'Bouquet rosa blanca o roja, 100 rosas', precio: 1600, foto: '/flores/bouquet-rosas.webp' },
		],
	},
	{
		categoria: 'Arreglos, cajas y canastas',
		arreglos: [
			{ nombre: 'Caja con 24 rosas, una sola vista', precio: 1300, foto: '/flores/caja-24-rosas.webp' },
			{ nombre: 'Lateral especial surtido', precio: 900, foto: '/flores/lateral-surtido.webp' },
			{ nombre: 'Base con 50 rosas en forma de topiario', precio: 1400, foto: '/flores/topiario.webp' },
			{ nombre: 'Canasta una sola vista, 12 polares y 12 rosas', precio: 1200, foto: '/flores/canasta-polares.webp' },
			{ nombre: 'Canasta con 100 rosas', precio: 3300, foto: '/flores/canasta-100-rosas.webp' },
		],
	},
	{
		categoria: 'Coronas',
		arreglos: [
			{ nombre: 'Corona 80 cm color', precio: 1800, foto: '/flores/corona-80.webp' },
			{ nombre: 'Corona 80 cm blanca', precio: 1900, foto: '/flores/corona-80.webp' },
			{ nombre: 'Corona 80 cm con 100 rosas (blanca)', precio: 2200, foto: '/flores/corona-100-rosas.webp' },
			{ nombre: 'Corona 80 cm con 100 rosas (rosa o roja)', precio: 2200, foto: '/flores/corona-100-rosas.webp' },
			{ nombre: 'Corona 80 cm, tonos rosa y morado', precio: 1400, foto: '/flores/corona-80.webp' },
			{ nombre: 'Corona 80 cm, tonos amarillo y rojo', precio: 1400, foto: '/flores/corona-80.webp' },
			{ nombre: 'Corona 90 cm, tonos amarillo y rojo', precio: 1800, foto: '/flores/corona-90.webp' },
			{ nombre: 'Corona 90 cm, tonos rojo y blanco', precio: 1800, foto: '/flores/corona-90.webp' },
			{ nombre: 'Corona 1 metro', precio: 2100, foto: '/flores/corona-1m.webp' },
			{ nombre: 'Corona 1 metro', precio: 2100, foto: '/flores/corona-1m.webp' },
			{ nombre: 'Corona 1 metro con 2 copetes', precio: 2500, foto: '/flores/corona-1m-2-copetes.webp' },
			{ nombre: 'Corona 1 metro con 2 copetes', precio: 2500, foto: '/flores/corona-1m-2-copetes.webp' },
			{ nombre: 'Corona 1 metro con 100 rosas', precio: 2800, foto: '/flores/corona-1m-100-rosas.webp' },
			{ nombre: 'Corona 1.20 m de diámetro', precio: 2600, foto: '/flores/corona-1-20.webp' },
		],
	},
	{
		categoria: 'Cruces y lágrimas',
		arreglos: [
			{ nombre: 'Cruz floral', precio: 1700, foto: '/flores/cruz.webp' },
			{ nombre: 'Lágrima chica', precio: 1500 },
			{ nombre: 'Lágrima grande', precio: 1800 },
		],
	},
];

// Los ids del contenido inicial dependen solo del orden, así son estables hasta el primer guardado.
export const floresIniciales = (): CategoriaDeFlores[] =>
	categoriasIniciales.map((c, i) => ({
		id: `categoria-${i}`,
		categoria: c.categoria,
		arreglos: c.arreglos.map((a, j) => ({ id: `arreglo-${i}-${j}`, ...a })),
	}));
