// Datos de contacto y navegación compartidos por todo el sitio.
// Fuente: documento de contenido (Google Sites). TODO: confirmar número de WhatsApp con el cliente.

export const sitio = {
	nombre: 'Funerales González',
	lema: 'Una institución creada para servirle desde 1945',
	telefono: { mostrar: '(81) 8346 4121', href: 'tel:+528183464121' },
	whatsapp: {
		mostrar: '81 1807 2578',
		href: 'https://wa.me/528118072578?text=Hola%2C%20necesito%20informaci%C3%B3n',
	},
	facebook: 'https://www.facebook.com/FuneralesGonzalezOficial',
};

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
