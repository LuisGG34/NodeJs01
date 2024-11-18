const { registrar, leer } = require("./operaciones");

const operacion = process.argv[2];

if (operacion === "registrar") {
    const [nombre, edad, tipo, color, enfermedad] = process.argv.slice(3);
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no reconocida. Usa 'registrar' o 'leer'.");
}