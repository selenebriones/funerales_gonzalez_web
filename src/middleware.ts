// Protege el admin: sin sesión, todo /admin manda a /admin/entrar.
import { defineMiddleware } from 'astro:middleware';
import { sesionValida } from './lib/sesion';

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;
	if (context.isPrerendered || !/^\/admin(\/|$)/.test(pathname) || pathname.startsWith('/admin/entrar')) return next();
	if (!sesionValida(context.cookies)) return context.redirect('/admin/entrar', 303);
	return next();
});
