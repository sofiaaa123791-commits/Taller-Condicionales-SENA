<?php

// ======================
// RETO A
// ======================

echo "<h2>RETO A: Sistema de Acceso</h2>";

$edad = 20;
$tieneEntrada = true;

if ($edad >= 18) {

    if ($tieneEntrada == true) {
        echo "¡Bienvenido!<br>";
    } else {
        echo "Acceso denegado: Se requiere entrada<br>";
    }

} else {
    echo "Acceso denegado: Menor de edad<br>";
}


// ======================
// RETO B
// ======================

echo "<h2>RETO B: Categorización de Jugadores</h2>";

$puntaje = 2;

switch ($puntaje) {

    case 1:
        echo "Principiante";
        break;

    case 2:
        echo "Pro";
        break;

    case 3:
        echo "Maestro";
        break;

    default:
        echo "Puntaje no válido";
}

?>