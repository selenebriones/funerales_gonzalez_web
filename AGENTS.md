# Funerales González — web nueva

Rediseño de funeralesgonzalez.com (hoy en Wix) para una funeraria familiar de Monterrey, N.L., fundada en 1945. Cliente de Futurite.

- Documento de traspaso (análisis completo): https://claude.ai/code/artifact/13250de7-6e64-4e65-97c1-8ba7518a19e5
- Contenido aprobado, fuente de verdad para textos, precios y catálogo (Google Sites, público): https://sites.google.com/futurite.com/funerales-gonzles-sitio-web/inicio — releer la página correspondiente antes de construir cada sección; sus "Nota:" son pendientes.

## Posicionamiento

"Tradición accesible": la seriedad de una funeraria familiar a precio justo y transparente, en el segmento medio frente a premium (Capillas del Carmen, Gayosso) y económico (cremación en línea). Una familia en crisis debe entender en segundos qué cuesta, qué incluye y cómo contactar ya. Tono visual sobrio, cálido y cercano: ni lujo ni estética de app.

## Convenciones

- Textos en español de México (`lang="es-MX"`), tuteando ("Estamos contigo", "Llámanos"). Solo el lema del logo va en usted.
- Colores y fuentes solo con los tokens de `src/styles/global.css` (`marca`, `oro`, `oro-oscuro`, `oro-claro`, `ciruela`, `lavanda`, `humo`, `marfil`, `tinta`, `whatsapp`, `chocolate`, `pie`, `franja` y `menu` (fondos del pie, de la franja superior y de la barra del menú; en `global.css` está anotado su valor anterior por si hay que volver), `rojo` (solo para el asterisco de campo obligatorio del admin); `font-serif` = Lora para titulares, `font-sans` = Nunito Sans). Nada de colores sueltos de Tailwind. Texto blanco pequeño nunca sobre `oro` (contraste insuficiente): usar `oro-oscuro`.
- Teléfonos, WhatsApp, sucursales y menú viven solo en `src/data/sitio.ts`; no escribirlos a mano en los componentes.
- Iconos con `<Icono nombre="..." />` (Lucide vía `lucide-static`).
- Encabezados de sección con `<TituloSeccion antetitulo titulo />`.
- `src/pages/[seccion].astro` genera páginas "en construcción" para el menú; al crear la página real de una sección, quitarla de ese `getStaticPaths`.
- La portada enlaza a `/servicios#inhumacion`, `#cremacion-con-velacion`, `#cremacion-directa`, `#traslados`, `#recepcion-de-restos` y `#crematorio-propio`: la página de servicios debe tener esos `id`.
- Comprobar con `npm run build` y revisar a 1440, 1280, 1024 y 390 px (el menú de escritorio aparece desde `xl`, 1280 px).
- Las plantillas de referencia (Farewell, Beacon/Anubis) son inspiración: no copiar su código ni sus imágenes.

## Admin (/admin)

- Solo edita el catálogo de ataúdes y urnas, las flores y los obituarios. Usuario (correo) y contraseña en las variables `ADMIN_USER` y `ADMIN_PASSWORD` (`.env` en local, Environment Variables en Vercel); ver `.env.example`.
- `/catalogo`, `/flores`, `/obituarios`, `/admin/*` e `/imagenes/*` se generan en cada visita (`prerender = false`); el resto del sitio sigue estático. Adaptador: Vercel si existe `VERCEL`, si no Node. `@astrojs/vercel` está fijo en 11.0.12 (sin `^`): la 11.0.13 truena las páginas dinámicas en Vercel ("Cannot find native binding" de rolldown). No actualizarlo sin probar un despliegue.
- El contenido vive en el almacén (`src/lib/almacen.ts`): Vercel Blob **privado** si el proyecto tiene un Blob store conectado, si no la carpeta `.almacen/` (ignorada por git). `src/data/catalogo.ts`, `flores.ts` y `obituarios.ts` son solo el contenido inicial mientras no se haya guardado nada; cambiar textos ahí ya no afecta un sitio donde el cliente guardó cambios.
- Las imágenes subidas pesan 1 MB como máximo (se revisa en el navegador y en el servidor), se convierten a WebP (máx. 1200 px) y se sirven en `/imagenes/...`; las fotos originales están en `public/catalogo/`, `public/flores/` y `public/obituarios/`. Sin foto se muestra la cruz del logo.
- El admin usa el mismo diseño del sitio (`AdminLayout`, componentes en `src/components/admin/`), con listas de renglones (foto, nombre, editar, borrar) de 10 en 10 con paginador. Catálogo y flores muestran una sección y una línea o categoría a la vez; la flecha junto al título abre el menú para cambiar (Ataúdes ↔ Urnas, y entre líneas o categorías); obituarios tiene buscador por nombre (sin distinguir acentos).
- Ataúdes y urnas se agrupan en líneas (`Linea`); las líneas y las categorías de flores se renombran, borran (con sus tarjetas) y se crean desde "Editar" de cualquier línea o categoría; la nueva queda en la misma sección (ataúdes, urnas o flores). El botón grande "Agregar línea/categoría" solo aparece si la sección se queda sin ninguna. La primera línea de urnas no tiene nombre y no muestra subtítulo.
- Obituarios: fechas completas de nacimiento y fallecimiento (la tarjeta muestra los años), inicio y partida con día, mes y hora de 24 h, misa opcional ("Iglesia a las HH:MM"); sin `ubicacion` no sale "Ver ubicación". Los obituarios de ejemplo son ficticios y el cliente los borra desde el admin.

## Pendiente del cliente

Precios 2026 e IVA, precios de servicio inmediato, logo en vector, fotos reales, aviso de privacidad, decisión de obituarios (se recomienda módulo propio). Lista completa en el documento de traspaso.

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
