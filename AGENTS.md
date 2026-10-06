# Funerales González — web nueva

Rediseño de funeralesgonzalez.com (hoy en Wix) para una funeraria familiar de Monterrey, N.L., fundada en 1945. Cliente de Futurite.

- Documento de traspaso (análisis completo): https://claude.ai/code/artifact/13250de7-6e64-4e65-97c1-8ba7518a19e5
- Contenido aprobado, fuente de verdad para textos, precios y catálogo (Google Sites, público): https://sites.google.com/futurite.com/funerales-gonzles-sitio-web/inicio — releer la página correspondiente antes de construir cada sección; sus "Nota:" son pendientes.

## Posicionamiento

"Tradición accesible": la seriedad de una funeraria familiar a precio justo y transparente, en el segmento medio frente a premium (Capillas del Carmen, Gayosso) y económico (cremación en línea). Una familia en crisis debe entender en segundos qué cuesta, qué incluye y cómo contactar ya. Tono visual sobrio, cálido y cercano: ni lujo ni estética de app.

## Convenciones

- Textos en español de México (`lang="es-MX"`), tuteando ("Estamos contigo", "Llámanos"). Solo el lema del logo va en usted.
- Colores y fuentes solo con los tokens de `src/styles/global.css` (`marca`, `oro`, `oro-oscuro`, `oro-claro`, `ciruela`, `lavanda`, `humo`, `tinta`; `font-serif` = Lora para titulares, `font-sans` = Nunito Sans). Nada de colores sueltos de Tailwind. Texto blanco pequeño nunca sobre `oro` (contraste insuficiente): usar `oro-oscuro`.
- Teléfonos, WhatsApp, sucursales y menú viven solo en `src/data/sitio.ts`; no escribirlos a mano en los componentes.
- Iconos con `<Icono nombre="..." />` (Lucide vía `lucide-static`).
- Encabezados de sección con `<TituloSeccion antetitulo titulo />`.
- `src/pages/[seccion].astro` genera páginas "en construcción" para el menú; al crear la página real de una sección, quitarla de ese `getStaticPaths`.
- La portada enlaza a `/servicios#inhumacion`, `#cremacion-con-velacion`, `#cremacion-directa`, `#traslados`, `#recepcion-de-restos` y `#crematorio-propio`: la página de servicios debe tener esos `id`.
- Comprobar con `npm run build` y revisar a 1440, 1280, 1024 y 390 px (el menú de escritorio aparece desde `xl`, 1280 px).
- Las plantillas de referencia (Farewell, Beacon/Anubis) son inspiración: no copiar su código ni sus imágenes.

## Pendiente del cliente

WhatsApp por confirmar (81 1807 2578), precios 2026 e IVA, precios de servicio inmediato, logo en vector, fotos reales, aviso de privacidad, decisión de obituarios (se recomienda módulo propio). Lista completa en el documento de traspaso.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
