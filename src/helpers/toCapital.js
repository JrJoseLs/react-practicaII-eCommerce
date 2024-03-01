export function toCapital(str) {
    if (!str) return str; // Si la cadena es null, undefined o vacía, retornarla sin modificar
    return str.charAt(0).toUpperCase() + str.slice(1);
}
