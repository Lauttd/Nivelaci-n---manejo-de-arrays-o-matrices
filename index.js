// Importamos la librería para leer datos del teclado
const readline = require('readline-sync');

function iniciarSistema() {
    // Definimos nuestra matriz principal (lista de listas)
    let matrizPersonas = [];

    console.log("--- BIENVENIDO AL SISTEMA ---");
    console.log("Escribe 'fin' en el nombre para terminar de cargar.\n");

    // Bucle infinito que solo se rompe cuando el usuario lo decide
    while (true) {
        // 1. ENTRADA DE DATOS
        let nombre = readline.question("Ingrese el nombre: ");

        // Si el usuario escribe 'fin' (en mayúsculas o minúsculas), salimos del bucle
        if (nombre.toLowerCase() === 'fin') {
            break;
        }

        // Pedimos edad y nota, y los convertimos a números (Number)
        let edad = Number(readline.question(`Ingrese la edad de ${nombre}: `));
        let nota = Number(readline.question(`Ingrese la nota de ${nombre}: `));

        // 2. PROCESAMIENTO
        // Creamos una "fila" con los datos
        let nuevaPersona = [nombre, edad, nota];
        
        // Agregamos esa fila a nuestra matriz principal
        matrizPersonas.push(nuevaPersona);
        
        console.log("¡Datos guardados!\n");
    }

    // Si la matriz está vacía, no hacemos nada más
    if (matrizPersonas.length === 0) {
        console.log("No se cargó ninguna información.");
        return;
    }

    // 3. SALIDA DE DATOS

    // --- Listado 1: Tal cual se cargaron ---
    console.log("\n--- LISTADO COMPLETO (Orden de carga) ---");
    for (let i = 0; i < matrizPersonas.length; i++) {
        // Accedemos a la matriz: [fila][columna]
        console.log(`Nombre: ${matrizPersonas[i][0]} | Edad: ${matrizPersonas[i][1]} | Nota: ${matrizPersonas[i][2]}`);
    }

    // --- Listado 2: Ordenado por nota (Mayor a Menor) ---
    // .slice() crea una copia para no desordenar la lista original
    let listaOrdenada = matrizPersonas.slice().sort((a, b) => {
        return b[2] - a[2]; // Compara las notas (índice 2) de forma descendente
    });

    console.log("\n--- LISTADO ORDENADO POR NOTA (Mayor a Menor) ---");
    listaOrdenada.forEach(persona => {
        console.log(`Nota: ${persona[2]} | Nombre: ${persona[0]}`);
    });

    // --- Promedio General ---
    let sumaNotas = 0;
    for (let i = 0; i < matrizPersonas.length; i++) {
        sumaNotas += matrizPersonas[i][2]; // Sumamos la nota de cada fila
    }
    let promedio = sumaNotas / matrizPersonas.length;

    console.log(`\n--- PROMEDIO GENERAL DE NOTAS: ${promedio.toFixed(2)} ---`);
}

// Llamamos a la función para que empiece el programa
iniciarSistema();