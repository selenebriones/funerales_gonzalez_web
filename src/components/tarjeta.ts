// Efecto común de las tarjetas del sitio al pasar el cursor: se eleva, gana sombra y contorno dorado,
// y la foto se acerca un poco. La barra dorada de abajo (<BarraHover />, como último hijo) solo va en la portada
// (servicios y sucursales), en las instalaciones de /sucursales, en los beneficios de /prevision
// y en los servicios de /servicios.
// La tarjeta debe llevar además su propio ring (ring-1 ring-black/5) para que el contorno cambie de color.
export const tarjetaHover = 'group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-oro-oscuro';
export const fotoHover = 'transition duration-700 ease-out group-hover:scale-105';
