// Acceso al admin: una sola contraseña (variable ADMIN_PASSWORD) y una cookie firmada que dura 7 días.
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';
import { ADMIN_PASSWORD } from 'astro:env/server';

const COOKIE = 'fg_admin';
const DURACION = 7 * 24 * 60 * 60; // segundos

// Firmar con la contraseña hace que, al cambiarla, se cierren todas las sesiones abiertas.
const firma = (valor: string) => createHmac('sha256', `fg-admin:${ADMIN_PASSWORD}`).update(valor).digest('hex');

const iguales = (a: string, b: string) => {
	const x = Buffer.from(a);
	const y = Buffer.from(b);
	return x.length === y.length && timingSafeEqual(x, y);
};

export const adminConfigurado = () => Boolean(ADMIN_PASSWORD);

export const contrasenaCorrecta = (intento: string) => adminConfigurado() && iguales(intento, ADMIN_PASSWORD!);

export function iniciarSesion(cookies: AstroCookies) {
	const vence = String(Math.floor(Date.now() / 1000) + DURACION);
	cookies.set(COOKIE, `${vence}.${firma(vence)}`, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: import.meta.env.PROD,
		maxAge: DURACION,
	});
}

export const cerrarSesion = (cookies: AstroCookies) => cookies.delete(COOKIE, { path: '/' });

export function sesionValida(cookies: AstroCookies) {
	if (!adminConfigurado()) return false;
	const [vence, f] = (cookies.get(COOKIE)?.value ?? '').split('.');
	return Boolean(vence && f) && Number(vence) > Date.now() / 1000 && iguales(f, firma(vence));
}
