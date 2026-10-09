// Obituarios: contenido inicial y formato. Desde el admin (/admin/obituarios) el cliente los publica y se guardan en
// el almacén (src/lib/almacen.ts); esta lista solo se usa mientras no haya nada guardado. Los más recientes van primero.
// `foto` es la URL de la imagen (public/obituarios/ o /imagenes/ si se subió desde el admin); sin foto, la tarjeta
// muestra la cruz del logo. Sin `ubicacion` no aparece el botón "Ver ubicación".
// TODO (cliente): definir si los obituarios se capturan aquí, desde un módulo propio o desde Facebook
// (notas del documento de contenido). Por ahora solo hay un registro de prueba.
import { sucursales } from './sitio';

/** Día y hora (24 h, "HH:MM") de un momento del servicio; el año no se pide. */
export interface Momento {
	dia: number;
	mes: number; // 1 a 12
	hora: string;
}

export interface Obituario {
	id: string;
	nombre: string;
	/** "AAAA-MM-DD". */
	nacimiento: string;
	fallecimiento: string;
	capilla: string;
	sala: string;
	/** Enlace de Google Maps. */
	ubicacion?: string;
	foto?: string;
	inicio: Momento;
	partida: Momento;
	misa?: { iglesia: string; hora: string };
	despide?: string;
}

export const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

/** "6 de octubre a las 09:30" */
export const textoMomento = (m: Momento) => `${m.dia} de ${meses[m.mes - 1]} a las ${m.hora}`;

/** "Iglesia Resurrección a las 10:00" */
export const textoMisa = (m: NonNullable<Obituario['misa']>) => `${m.iglesia} a las ${m.hora}`;

export const anio = (fecha: string) => fecha.slice(0, 4);

/** "15 de marzo de 1941", o solo el año si no hay fecha completa. */
export const fechaLarga = (fecha: string) => {
	const [a, m, d] = fecha.split('-').map(Number);
	return m && d ? `${d} de ${meses[m - 1]} de ${a}` : String(a);
};

// --- Contenido inicial ---

const mapaDe = (capilla: string) => sucursales.find((s) => s.nombre === capilla)?.mapa;

// "8 de octubre a las 10:00 hrs" → Momento
const momento = (texto: string): Momento => {
	const [, dia, mes, h, min] = texto.match(/^(\d+) de (\w+) a las (\d+):(\d+)/)!;
	return { dia: Number(dia), mes: meses.indexOf(mes) + 1, hora: `${h.padStart(2, '0')}:${min}` };
};

// "Iglesia Resurrección a las 10:00 hrs" → misa
const misa = (texto: string) => {
	const [, iglesia, h, min] = texto.match(/^(.*) a las (\d+):(\d+)/)!;
	return { iglesia, hora: `${h.padStart(2, '0')}:${min}` };
};

type Fila = [nombre: string, nacimiento: string, capilla: string, sala: string, inicia: string, partira: string, misa: string, despide: string, foto?: string];

const publicados: Fila[] = [
	['Patricia Reyes Acosta', '1963-01-01', 'Capillas Montemorelos', 'Sala 1', '6 de octubre a las 9:30 hrs', '7 de octubre a las 9:40 hrs', 'Iglesia Resurrección a las 10:00 hrs', 'Panteón Municipal', '/obituarios/foto_esquela_test.webp'],
];

// EJEMPLO PARA REVISIÓN DEL CLIENTE: personas ficticias (fechas inventadas), sin foto, para mostrar cómo se ve la
// página llena y el paginador. Se pueden borrar desde el admin.
const deEjemplo: Fila[] = [
	['María Guadalupe Treviño Garza', '1941-06-08', 'Capillas Matriz', 'Sala 3', '8 de octubre a las 10:00 hrs', '9 de octubre a las 11:00 hrs', 'Parroquia del Sagrado Corazón a las 12:00 hrs', 'Panteón del Carmen'],
	['José Luis Martínez Cantú', '1955-11-15', 'Crematorio y Capillas Oriente', 'Sala 2', '8 de octubre a las 12:00 hrs', '9 de octubre a las 10:00 hrs', '', 'Crematorio Oriente'],
	['Ana Laura Villarreal Salinas', '1978-04-22', 'Capillas Hidalgo', 'Sala 1', '8 de octubre a las 16:00 hrs', '9 de octubre a las 9:00 hrs', 'Templo de San Martín a las 9:30 hrs', 'Panteón Municipal de Hidalgo'],
	['Roberto Elizondo Ramos', '1949-09-02', 'Capillas Matriz', 'Sala 1', '7 de octubre a las 18:00 hrs', '8 de octubre a las 11:30 hrs', 'Basílica del Roble a las 12:00 hrs', 'Panteón Jardín'],
	['Esperanza Cavazos de la Fuente', '1936-02-09', 'Capillas Montemorelos', 'Sala 2', '7 de octubre a las 11:00 hrs', '8 de octubre a las 10:00 hrs', 'Parroquia de San Mateo a las 10:30 hrs', 'Panteón Municipal'],
	['Francisco Javier Leal Garza', '1962-07-16', 'Crematorio y Capillas Oriente', 'Sala 1', '7 de octubre a las 9:00 hrs', '8 de octubre a las 9:00 hrs', '', 'Crematorio Oriente'],
	['Rosa María González Peña', '1945-12-23', 'Capillas Matriz', 'Sala 2', '6 de octubre a las 17:00 hrs', '7 de octubre a las 12:00 hrs', 'Catedral de Monterrey a las 12:30 hrs', 'Panteón del Carmen'],
	['Juan Manuel Saldívar Ríos', '1970-05-03', 'Capillas Hidalgo', 'Sala 2', '6 de octubre a las 13:00 hrs', '7 de octubre a las 10:00 hrs', '', 'Panteón Municipal de Hidalgo'],
	['Leticia Olivares Benavides', '1958-10-10', 'Capillas Montemorelos', 'Sala 3', '6 de octubre a las 10:00 hrs', '7 de octubre a las 11:00 hrs', 'Parroquia de San Mateo a las 11:30 hrs', 'Panteón Municipal'],
	['Arturo Sepúlveda Montemayor', '1951-03-17', 'Capillas Matriz', 'Sala 4', '5 de octubre a las 19:00 hrs', '6 de octubre a las 10:30 hrs', 'Parroquia de la Purísima a las 11:00 hrs', 'Panteón Jardín'],
	['Martha Alicia Ibarra Luna', '1967-08-24', 'Crematorio y Capillas Oriente', 'Sala 3', '5 de octubre a las 15:00 hrs', '6 de octubre a las 9:30 hrs', 'Capilla de Guadalupe a las 10:00 hrs', 'Crematorio Oriente'],
	['Héctor Hugo Zambrano Flores', '1939-01-04', 'Capillas Montemorelos', 'Sala 1', '5 de octubre a las 11:00 hrs', '6 de octubre a las 12:00 hrs', '', 'Panteón Municipal'],
	['Graciela Tamez Rodríguez', '1952-06-11', 'Capillas Hidalgo', 'Sala 1', '4 de octubre a las 18:00 hrs', '5 de octubre a las 10:00 hrs', 'Templo de San Martín a las 10:30 hrs', 'Panteón Municipal de Hidalgo'],
	['Fernando Cárdenas Villanueva', '1960-11-18', 'Capillas Matriz', 'Sala 3', '4 de octubre a las 12:00 hrs', '5 de octubre a las 11:00 hrs', 'Basílica del Roble a las 11:30 hrs', 'Panteón del Carmen'],
	['Irma Delia Garza Quintanilla', '1944-04-25', 'Crematorio y Capillas Oriente', 'Sala 2', '4 de octubre a las 9:00 hrs', '5 de octubre a las 9:00 hrs', '', 'Crematorio Oriente'],
];

// En el contenido inicial, el fallecimiento es el día anterior al inicio del servicio.
const diaAnterior = (m: Momento) => new Date(Date.UTC(2026, m.mes - 1, m.dia - 1)).toISOString().slice(0, 10);

// Los ids del contenido inicial dependen solo del orden, así son estables hasta el primer guardado.
export const obituariosIniciales = (): Obituario[] =>
	[...publicados, ...deEjemplo].map(([nombre, nacimiento, capilla, sala, inicia, partira, laMisa, despide, foto], i) => ({
		id: `obituario-${i}`,
		nombre,
		nacimiento,
		fallecimiento: diaAnterior(momento(inicia)),
		capilla,
		sala,
		ubicacion: mapaDe(capilla),
		foto,
		inicio: momento(inicia),
		partida: momento(partira),
		misa: laMisa ? misa(laMisa) : undefined,
		despide,
	}));
