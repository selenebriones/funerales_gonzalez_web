// Catálogo de ataúdes y urnas: contenido inicial. Fuente: documento de contenido (Google Sites), página "Catálogo de Ataúdes y Urnas".
// Desde el admin (/admin/catalogo) el cliente lo edita y se guarda en el almacén (src/lib/almacen.ts); este archivo
// solo se usa mientras no haya nada guardado. `foto` es la URL de la imagen (public/catalogo/ o /imagenes/ si se subió
// desde el admin). Solo tienen foto los modelos cuyo nombre coincide con funeralesgonzalez.com/ataudes y /urnas;
// el resto muestra la cruz del logo.
// TODO (cliente): catálogo depurado, fotos de los modelos faltantes, emblemas por modelo y medidas de extra ancho/jumbo.

export interface Producto {
	id: string;
	nombre: string;
	especificaciones: string[];
	foto?: string;
}

/** Línea (subtítulo) con sus tarjetas. Las urnas también se agrupan en líneas; la primera no tiene nombre. */
export interface Linea {
	id: string;
	linea: string;
	productos: Producto[];
}

export interface Catalogo {
	lineas: Linea[];
	urnas: Linea[];
}

type SinId<T> = Omit<T, 'id'>;

const lineasIniciales: { linea: string; productos: SinId<Producto>[] }[] = [
	{
		linea: 'Línea Clásica / Madera',
		productos: [
			{
				nombre: 'Cádiz',
				foto: '/catalogo/cadiz.webp',
				especificaciones: ['199.5 cm largo x 64.5 cm ancho x 60 cm alto', 'Madera pino selecta', 'Acabado nogal', 'Tapizado poliéster blanco', 'Capacidad de 110 kg'],
			},
			{
				nombre: 'Nazareth',
				foto: '/catalogo/nazareth.webp',
				especificaciones: ['191 cm largo x 56 cm ancho x 60 cm alto', 'Madera pino selecta, ochavado', 'Herraje de importación, barra móvil', 'Tapizado en poliéster, con vidrio', 'Capacidad máxima de 120 kg'],
			},
			{
				nombre: 'Génova Medio Lecho',
				foto: '/catalogo/genova.webp',
				especificaciones: ['193 cm largo x 60 cm ancho x 60 cm alto', 'Madera pino selecta, labrados en borde superior y base', 'Herraje de importación, barra móvil', 'Tapizado en poliéster, domo acrílico', 'Capacidad máxima de 120 kg'],
			},
			{
				nombre: 'Madrid Medio Cristal',
				especificaciones: ['208 cm largo x 68.5 cm ancho x 60.5 cm alto', 'Madera Poplar, acabado mate', 'Herraje metálico de importación, barra circular', 'Tapizado plisado en poliseda', 'Capacidad máxima de 120 kg'],
			},
			{
				nombre: 'Pieta',
				especificaciones: ['195 cm largo x 60 cm ancho x 60 cm alto', 'Madera Álamo selecta, acabado nogal', 'Herraje de importación, barra circular fija', 'Tapizado plisado en poliéster, domo acrílico'],
			},
			{
				nombre: 'Francia Medio Lecho',
				foto: '/catalogo/francia.webp',
				especificaciones: ['205 cm largo x 70 cm ancho x 60 cm alto', 'Madera sólida y enchapados, con cama de posiciones', 'Cierre de tapa con llave', 'Tapizado en crepé Rosetán, domo acrílico', 'Herrajes color bronce, estilo escocés', 'Disponible en colores Nogal, Roble o Caoba'],
			},
			{
				nombre: 'Canadá Medio Lecho',
				especificaciones: ['200 cm largo x 60 cm ancho x 60 cm alto', 'Madera Ponderosa, 100% estufada', 'Tapizado en velur, herraje de madera con brazo y tapones americanos', 'Color cerezo semimate', 'Capacidad máxima de 100 kg'],
			},
			{
				nombre: 'Soga Vieja',
				especificaciones: ['205 cm largo x 70 cm ancho x 60 cm alto', 'Madera Encino Americano, natural', 'Tapicería en terciopelo', 'Capacidad máxima de 100 kg'],
			},
			{
				nombre: 'Pembroke Cherry',
				especificaciones: ['205 cm largo x 70 cm ancho x 60 cm alto', 'Madera sólida y enchapados, con cama de posiciones', 'Cierre de tapa con llave', 'Tapizado en crepé Rosetán, domo acrílico', 'Herrajes color bronce, estilo escocés', 'Disponible en colores Nogal, Roble o Caoba'],
			},
		],
	},
	{
		linea: 'Línea Metálica',
		productos: [
			{
				nombre: 'Gama Metálico',
				// En el sitio actual se llama "Ataúd Gamma Básico"; es el mismo modelo gris plata.
				foto: '/catalogo/gama-metalico.webp',
				especificaciones: ['195 cm largo x 62 cm ancho x 53 cm alto', 'Color gris plata, herrajes de plástico', 'Tapizado en tafeta blanco', 'Capacidad máxima de 110 kg'],
			},
			{
				nombre: 'Misterium',
				foto: '/catalogo/misterium.webp',
				// TODO (cliente): el documento dice "Capacidad máxima de 120" sin unidad; se asume kg.
				especificaciones: ['210 cm largo x 70 cm ancho x 57 cm alto', 'Variedad de tonos, herrajes de plástico de importación', 'Tapizado en tafeta, en combinación al tono del ataúd', 'Capacidad máxima de 120 kg'],
			},
		],
	},
	{
		linea: 'Línea Extra Ancho / Jumbo',
		productos: [
			{
				nombre: 'Titan Extra Ancho',
				especificaciones: ['210 cm largo x 80.5 cm ancho x 61 cm alto', 'Herraje metálico, barra circular fija', 'Capacidad máxima de 160 kg'],
			},
			{
				nombre: 'Magno Jumbo',
				especificaciones: ['210 cm largo x 100 cm ancho x 80 cm alto', 'Herraje metálico, barra circular fija', 'Capacidad máxima de 200 kg'],
			},
		],
	},
];

const urnasIniciales: SinId<Producto>[] = [
	{ nombre: 'Inoxicub', especificaciones: ['Acero inoxidable, laca brillante', '14 x 14 x 18 cm'] },
	{ nombre: 'Bronsat Cubo', especificaciones: ['Bronce satinado, laca brillante', '14 x 14 x 18 cm'] },
	{ nombre: 'Bronsat Horizontal', especificaciones: ['Bronce satinado, laca brillante', '20 x 14 x 14 cm'] },
	{ nombre: 'Madera Básica', foto: '/catalogo/madera-basica.webp', especificaciones: ['Madera MD, línea básica', '15 x 15 x 20 cm'] },
	{ nombre: 'Portarretrato Individual', foto: '/catalogo/portarretrato.webp', especificaciones: ['Madera de pino, alto brillo', '18 x 11.5 x 26 cm'] },
	{ nombre: 'Cofre Ofrenda', especificaciones: ['Madera', '17 x 26.5 x 16 cm'] },
	{
		nombre: 'Regina Coelli',
		foto: '/catalogo/regina-coelli.webp',
		especificaciones: ['Horizontal: 17 x 25 x 18 cm', 'Vertical: 16 x 16 x 26 cm'],
	},
	{
		nombre: 'Urna Matrimonial Doble',
		foto: '/catalogo/matrimonial-doble.webp',
		especificaciones: ['Porta Retrato: 16 x 30 x 21 cm', 'Romano Horizontal: 22.5 x 30.5 x 17 cm'],
	},
	{ nombre: 'Mármol Cubo', especificaciones: ['Mármol', '15 x 15 x 20 cm'] },
];

// Los ids del contenido inicial dependen solo del orden, así son estables hasta el primer guardado.
export const catalogoInicial = (): Catalogo => ({
	lineas: lineasIniciales.map((l, i) => ({
		id: `linea-${i}`,
		linea: l.linea,
		productos: l.productos.map((p, j) => ({ id: `ataud-${i}-${j}`, ...p })),
	})),
	urnas: [{ id: 'urnas-0', linea: '', productos: urnasIniciales.map((p, j) => ({ id: `urna-${j}`, ...p })) }],
});
