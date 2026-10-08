// @ts-check
import { defineConfig, envField } from 'astro/config';

import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Todo se genera estático salvo las páginas con `export const prerender = false`: el catálogo, las flores y el admin,
	// que leen el contenido editable del almacén en cada visita. En Vercel se usa su adaptador; en local, Node.
	adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
	env: {
		schema: {
			// Contraseña del admin (/admin). Sin ella nadie puede entrar.
			ADMIN_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
