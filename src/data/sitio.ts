// Datos de contacto y navegación compartidos por todo el sitio.
// Fuente: documento de contenido (Google Sites). TODO: confirmar número de WhatsApp con el cliente.

const whatsappNumero = '528118072578';

/** Enlace de WhatsApp con un mensaje ya escrito. */
export const whatsappCon = (mensaje: string) =>
	`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

export const sitio = {
	nombre: 'Funerales González',
	lema: 'Una institución creada para servirle desde 1945',
	telefono: { mostrar: '(81) 8346 4121', href: 'tel:+528183464121' },
	whatsapp: {
		mostrar: '81 1807 2578',
		href: whatsappCon('Hola, necesito información'),
	},
	facebook: 'https://www.facebook.com/FuneralesGonzalezOficial',
	razonSocial: 'Previsiones González, S.A. de C.V.',
};

const mapa = (direccion: string) =>
	`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;

export const sucursales = [
	{
		nombre: 'Capillas Matriz',
		direccion: 'Av. Simón Bolívar No. 2160 Nte., Col. Mitras Centro, Monterrey, N.L., C.P. 64460',
		telefonos: ['(81) 8346 4121', '(81) 8347 0316'],
	},
	{
		nombre: 'Crematorio y Capillas Oriente',
		direccion: 'Av. Cristóbal Colón 3216 Ote., Col. Acero, Monterrey, N.L.',
		telefonos: ['(81) 8355 9058'],
	},
	{
		nombre: 'Capillas Montemorelos',
		direccion: 'Zaragoza 1202, esq. Morelos, Barrio Zaragoza, Montemorelos, N.L.',
		telefonos: ['(826) 263 5300'],
	},
	{
		nombre: 'Capillas Hidalgo',
		direccion: 'Priv. 5 de Febrero 105, Hidalgo Centro, Hidalgo, N.L., C.P. 65600',
		telefonos: ['(829) 286 5300'],
	},
].map((s) => ({ ...s, mapa: mapa(s.direccion) }));

export const navegacion = [
	{ texto: 'Inicio', href: '/' },
	{ texto: 'Nosotros', href: '/nosotros' },
	{ texto: 'Servicios Funerarios', href: '/servicios' },
	{ texto: 'Planes de Previsión', href: '/prevision' },
	{ texto: 'Catálogo de Ataúdes y Urnas', href: '/catalogo' },
	{ texto: 'Flores', href: '/flores' },
	{ texto: 'Sucursales', href: '/sucursales' },
	{ texto: 'Obituarios', href: '/obituarios' },
	{ texto: 'Galería', href: '/galeria' },
	{ texto: 'Contacto', href: '/contacto' },
];
