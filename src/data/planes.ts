// Paquetes de previsión y precios. Fuente: documento de contenido (Google Sites), página "Planes de Previsión".
// TODO (cliente): confirmar si los paquetes de Mitras Centro de 24 hrs "Opcional" y "Para cremación" son distintos
// (mismo precio y casi la misma descripción en el material original), precios 2026, IVA y cómo aplica
// el financiamiento (10% de enganche + hasta 36 meses sin intereses) sobre estas cifras.

export interface Plan {
	tipo: string;
	velacion: string;
	detalle: string;
	lista: number;
	contado: number;
}

export const gruposDePlanes: { sucursal: string; planes: Plan[] }[] = [
	{
		sucursal: 'Mitras Centro',
		planes: [
			{ tipo: 'Opcional (inhumación o cremación)', velacion: '24 hrs', detalle: 'Ataúd mod. básico en venta', lista: 42500, contado: 38700 },
			{ tipo: 'Opcional (inhumación o cremación)', velacion: '12 hrs', detalle: 'Ataúd mod. básico en venta', lista: 35800, contado: 32500 },
			{ tipo: 'Para cremación', velacion: '24 hrs', detalle: 'Ataúd mod. Gama en renta + crematorio particular', lista: 42500, contado: 38700 },
		],
	},
	{
		sucursal: 'Montemorelos e Hidalgo',
		planes: [
			{ tipo: 'Opcional (inhumación o cremación)', velacion: '12 hrs', detalle: 'Ataúd mod. básico en venta', lista: 35800, contado: 32500 },
			{ tipo: 'Inhumación', velacion: '24 hrs', detalle: 'Ataúd mod. básico en venta', lista: 27500, contado: 24600 },
			{ tipo: 'Inhumación', velacion: '12 hrs', detalle: 'Ataúd mod. básico en venta', lista: 24600, contado: 19000 },
			{ tipo: 'Para cremación', velacion: '12 hrs', detalle: 'Ataúd en renta + urna de madera básica + crematorio particular', lista: 33000, contado: 29500 },
			{ tipo: 'Para cremación', velacion: '24 hrs', detalle: 'Ataúd mod. Gama en renta + crematorio particular', lista: 38500, contado: 34600 },
		],
	},
	{
		sucursal: 'Sucursal Oriente',
		planes: [
			{ tipo: 'Para cremación', velacion: '12 hrs', detalle: 'Ataúd en renta + urna de madera básica + crematorio particular', lista: 33000, contado: 29500 },
		],
	},
	{
		sucursal: 'Cualquier sucursal',
		planes: [{ tipo: 'Cremación directa', velacion: 'Sin velación', detalle: 'Urna básica de madera', lista: 23000, contado: 21500 }],
	},
];

export const incluyenTodos = [
	'Asesoría para el funeral',
	'Personal de atención y servicio',
	'Traslado local',
	'Embalsamamiento',
	'Arreglo estético (aseo, vestido y maquillado)',
	'Capilla de velación',
	'Servicio de oratorio sin sacerdote',
];

export const pesos = (n: number) =>
	n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });
