// Arreglos florales y precios. Fuente: documento de contenido (Google Sites), página "Flores".
// `foto` es el nombre del archivo en src/assets/flores/ (sin extensión), tomado de funeralesgonzalez.com/ofrendas
// solo donde el nombre coincide. Varias fotos muestran dos variantes de color lado a lado.
// TODO (cliente): confirmar el precio del bouquet de 48 rosas ($75 en el documento, parece incompleto),
// los modelos que aparecen dos veces con el mismo nombre y precio, y fotos de las lágrimas.

export interface Arreglo {
	nombre: string;
	precio: number;
	foto?: string;
}

export const categoriasDeFlores: { categoria: string; arreglos: Arreglo[] }[] = [
	{
		categoria: 'Bouquets',
		arreglos: [
			{ nombre: 'Bouquet rosa blanca o roja, 24 rosas', precio: 550, foto: 'bouquet-rosas' },
			{ nombre: 'Bouquet rosa blanca o roja, 48 rosas', precio: 75, foto: 'bouquet-rosas' },
			{ nombre: 'Bouquet rosa blanca o roja, 100 rosas', precio: 1600, foto: 'bouquet-rosas' },
		],
	},
	{
		categoria: 'Arreglos, cajas y canastas',
		arreglos: [
			{ nombre: 'Caja con 24 rosas, una sola vista', precio: 1300, foto: 'caja-24-rosas' },
			{ nombre: 'Lateral especial surtido', precio: 900, foto: 'lateral-surtido' },
			{ nombre: 'Base con 50 rosas en forma de topiario', precio: 1400, foto: 'topiario' },
			{ nombre: 'Canasta una sola vista, 12 polares y 12 rosas', precio: 1200, foto: 'canasta-polares' },
			{ nombre: 'Canasta con 100 rosas', precio: 3300, foto: 'canasta-100-rosas' },
		],
	},
	{
		categoria: 'Coronas',
		arreglos: [
			{ nombre: 'Corona 80 cm color', precio: 1800, foto: 'corona-80' },
			{ nombre: 'Corona 80 cm blanca', precio: 1900, foto: 'corona-80' },
			{ nombre: 'Corona 80 cm con 100 rosas (blanca)', precio: 2200, foto: 'corona-100-rosas' },
			{ nombre: 'Corona 80 cm con 100 rosas (rosa o roja)', precio: 2200, foto: 'corona-100-rosas' },
			{ nombre: 'Corona 80 cm, tonos rosa y morado', precio: 1400, foto: 'corona-80' },
			{ nombre: 'Corona 80 cm, tonos amarillo y rojo', precio: 1400, foto: 'corona-80' },
			{ nombre: 'Corona 90 cm, tonos amarillo y rojo', precio: 1800, foto: 'corona-90' },
			{ nombre: 'Corona 90 cm, tonos rojo y blanco', precio: 1800, foto: 'corona-90' },
			{ nombre: 'Corona 1 metro', precio: 2100, foto: 'corona-1m' },
			{ nombre: 'Corona 1 metro', precio: 2100, foto: 'corona-1m' },
			{ nombre: 'Corona 1 metro con 2 copetes', precio: 2500, foto: 'corona-1m-2-copetes' },
			{ nombre: 'Corona 1 metro con 2 copetes', precio: 2500, foto: 'corona-1m-2-copetes' },
			{ nombre: 'Corona 1 metro con 100 rosas', precio: 2800, foto: 'corona-1m-100-rosas' },
			{ nombre: 'Corona 1.20 m de diámetro', precio: 2600, foto: 'corona-1-20' },
		],
	},
	{
		categoria: 'Cruces y lágrimas',
		arreglos: [
			{ nombre: 'Cruz floral', precio: 1700, foto: 'cruz' },
			{ nombre: 'Lágrima chica', precio: 1500 },
			{ nombre: 'Lágrima grande', precio: 1800 },
		],
	},
];
