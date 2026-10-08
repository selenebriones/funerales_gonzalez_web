// Obituarios publicados. `foto` es el nombre del archivo en src/assets/obituarios/ (sin extensión);
// sin foto, la tarjeta muestra la cruz del logo.
// Para agregar uno: subir la foto a esa carpeta y añadir una entrada al inicio de la lista (los más recientes primero).
// TODO (cliente): definir si los obituarios se capturan aquí, desde un módulo propio o desde Facebook
// (notas del documento de contenido). Por ahora solo hay un registro de prueba.

export interface Obituario {
	nombre: string;
	nacimiento: number;
	fallecimiento: number;
	sucursal: string;
	sala: string;
	foto?: string;
	servicio: {
		inicia: string;
		partira: string;
		misa?: string;
		despide: string;
	};
}

const publicados: Obituario[] = [
	{
		nombre: 'Patricia Reyes Acosta',
		nacimiento: 1963,
		fallecimiento: 2026,
		sucursal: 'Capillas Montemorelos',
		sala: 'Sala 1',
		foto: 'foto_esquela_test',
		servicio: {
			inicia: '6 de octubre a las 9:30 hrs',
			partira: '7 de octubre a las 9:40 hrs',
			misa: 'Iglesia Resurrección a las 10:00 hrs',
			despide: 'Panteón Municipal',
		},
	},
];

// EJEMPLO PARA REVISIÓN DEL CLIENTE: personas ficticias, sin foto, para mostrar cómo se ve la página llena
// y el paginador. Antes de publicar, borrar esta lista y dejar `export const obituarios = publicados;`.
const deEjemplo: Obituario[] = [
	['María Guadalupe Treviño Garza', 1941, 'Capillas Matriz', 'Sala 3', '8 de octubre a las 10:00 hrs', '9 de octubre a las 11:00 hrs', 'Parroquia del Sagrado Corazón a las 12:00 hrs', 'Panteón del Carmen'],
	['José Luis Martínez Cantú', 1955, 'Crematorio y Capillas Oriente', 'Sala 2', '8 de octubre a las 12:00 hrs', '9 de octubre a las 10:00 hrs', '', 'Crematorio Oriente'],
	['Ana Laura Villarreal Salinas', 1978, 'Capillas Hidalgo', 'Sala 1', '8 de octubre a las 16:00 hrs', '9 de octubre a las 9:00 hrs', 'Templo de San Martín a las 9:30 hrs', 'Panteón Municipal de Hidalgo'],
	['Roberto Elizondo Ramos', 1949, 'Capillas Matriz', 'Sala 1', '7 de octubre a las 18:00 hrs', '8 de octubre a las 11:30 hrs', 'Basílica del Roble a las 12:00 hrs', 'Panteón Jardín'],
	['Esperanza Cavazos de la Fuente', 1936, 'Capillas Montemorelos', 'Sala 2', '7 de octubre a las 11:00 hrs', '8 de octubre a las 10:00 hrs', 'Parroquia de San Mateo a las 10:30 hrs', 'Panteón Municipal'],
	['Francisco Javier Leal Garza', 1962, 'Crematorio y Capillas Oriente', 'Sala 1', '7 de octubre a las 9:00 hrs', '8 de octubre a las 9:00 hrs', '', 'Crematorio Oriente'],
	['Rosa María González Peña', 1945, 'Capillas Matriz', 'Sala 2', '6 de octubre a las 17:00 hrs', '7 de octubre a las 12:00 hrs', 'Catedral de Monterrey a las 12:30 hrs', 'Panteón del Carmen'],
	['Juan Manuel Saldívar Ríos', 1970, 'Capillas Hidalgo', 'Sala 2', '6 de octubre a las 13:00 hrs', '7 de octubre a las 10:00 hrs', '', 'Panteón Municipal de Hidalgo'],
	['Leticia Olivares Benavides', 1958, 'Capillas Montemorelos', 'Sala 3', '6 de octubre a las 10:00 hrs', '7 de octubre a las 11:00 hrs', 'Parroquia de San Mateo a las 11:30 hrs', 'Panteón Municipal'],
	['Arturo Sepúlveda Montemayor', 1951, 'Capillas Matriz', 'Sala 4', '5 de octubre a las 19:00 hrs', '6 de octubre a las 10:30 hrs', 'Parroquia de la Purísima a las 11:00 hrs', 'Panteón Jardín'],
	['Martha Alicia Ibarra Luna', 1967, 'Crematorio y Capillas Oriente', 'Sala 3', '5 de octubre a las 15:00 hrs', '6 de octubre a las 9:30 hrs', 'Capilla de Guadalupe a las 10:00 hrs', 'Crematorio Oriente'],
	['Héctor Hugo Zambrano Flores', 1939, 'Capillas Montemorelos', 'Sala 1', '5 de octubre a las 11:00 hrs', '6 de octubre a las 12:00 hrs', '', 'Panteón Municipal'],
	['Graciela Tamez Rodríguez', 1952, 'Capillas Hidalgo', 'Sala 1', '4 de octubre a las 18:00 hrs', '5 de octubre a las 10:00 hrs', 'Templo de San Martín a las 10:30 hrs', 'Panteón Municipal de Hidalgo'],
	['Fernando Cárdenas Villanueva', 1960, 'Capillas Matriz', 'Sala 3', '4 de octubre a las 12:00 hrs', '5 de octubre a las 11:00 hrs', 'Basílica del Roble a las 11:30 hrs', 'Panteón del Carmen'],
	['Irma Delia Garza Quintanilla', 1944, 'Crematorio y Capillas Oriente', 'Sala 2', '4 de octubre a las 9:00 hrs', '5 de octubre a las 9:00 hrs', '', 'Crematorio Oriente'],
].map(([nombre, nacimiento, sucursal, sala, inicia, partira, misa, despide]) => ({
	nombre: nombre as string,
	nacimiento: nacimiento as number,
	fallecimiento: 2026,
	sucursal: sucursal as string,
	sala: sala as string,
	servicio: { inicia: inicia as string, partira: partira as string, misa: (misa as string) || undefined, despide: despide as string },
}));

export const obituarios = [...publicados, ...deEjemplo];
