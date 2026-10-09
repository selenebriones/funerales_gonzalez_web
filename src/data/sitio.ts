// Datos de contacto y navegación compartidos por todo el sitio.
// Fuente: documento de contenido (Google Sites). WhatsApp de urgencias confirmado: +52 81 1807 2578.

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

/** Enlace tel: a partir de un teléfono escrito como (81) 8346 4121. */
export const telHref = (t: string) => `tel:+52${t.replace(/\D/g, '')}`;

// `foto`: fachada tomada del sitio actual (Wix); Hidalgo aún no tiene.
type Sucursal = { nombre: string; direccion: string; telefonos: string[]; foto?: string; busquedaMapa?: string };

export const sucursales = (<Sucursal[]>[
	{
		nombre: 'Capillas Matriz',
		direccion: 'Av. Simón Bolívar No. 2160 Nte., Col. Mitras Centro, Monterrey, N.L., C.P. 64460',
		telefonos: ['(81) 8346 4121', '(81) 8347 0316'],
		foto: '/sucursales/matriz.webp',
	},
	{
		nombre: 'Crematorio y Capillas Oriente',
		direccion: 'Av. Cristóbal Colón 3216 Ote., Col. Acero, Monterrey, N.L.',
		telefonos: ['(81) 8355 9058'],
		foto: '/sucursales/oriente.webp',
	},
	{
		nombre: 'Capillas Montemorelos',
		direccion: 'Zaragoza 1202, esq. Morelos, Barrio Zaragoza, Montemorelos, N.L.',
		telefonos: ['(826) 263 5300'],
		foto: '/sucursales/montemorelos.webp',
		// Google Maps no ubica la dirección escrita; por el nombre del negocio sí.
		busquedaMapa: 'Funerales González Montemorelos, Nuevo León',
	},
	{
		nombre: 'Capillas Hidalgo',
		direccion: 'Priv. 5 de Febrero 105, Hidalgo Centro, Hidalgo, N.L., C.P. 65600',
		telefonos: ['(829) 286 5300'],
	},
]).map((s) => {
	const busqueda = s.busquedaMapa ?? s.direccion;
	return { ...s, mapa: mapa(busqueda) };
});

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
	// Contacto no tiene página: lleva al pie (id="contacto") de la página en la que se esté.
	{ texto: 'Contacto', href: '#contacto' },
];
