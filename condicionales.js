// ======================
// RETO A
// Sistema de Acceso
// ======================

console.log("=== RETO A: Sistema de Acceso ===");

let edad = 20;
let tieneEntrada = true;

if (edad >= 18) {

    if (tieneEntrada === true) {
        console.log("¡Bienvenido!");
    } else {
        console.log("Acceso denegado: Se requiere entrada");
    }

} else {
    console.log("Acceso denegado: Menor de edad");
}


// ======================
// RETO B
// Categorización
// ======================

console.log("\n=== RETO B: Categorización de Jugadores ===");

let puntaje = 2;

switch (puntaje) {

    case 1:
        console.log("Principiante");
        break;

    case 2:
        console.log("Pro");
        break;

    case 3:
        console.log("Maestro");
        break;

    default:
        console.log("Puntaje no válido");
}