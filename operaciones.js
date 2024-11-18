
// con require leemos el modulo file system
const fs = require("fs");

// Función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    // Leer el archivo citas.json para esto ocupamos file system funcion readfile
    fs.readFile("citas.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }

        const citas = JSON.parse(data);
        citas.push(nuevaCita);

        // Escribir en el archivo citas.json
        fs.writeFile("citas.json", JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error("Error al escribir en el archivo:", err);
            } else {
                console.log("Cita registrada exitosamente.");
            }
        });
    });
}

// Función para leer todas las citas para esto ocupamos file system funcion readfile
function leer() {
    fs.readFile("citas.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }

        const citas = JSON.parse(data);
        console.log("Citas registradas:", citas);
    });
}

// exportamos las funciones creadas para ser utilizadas desde otro archivo
module.exports = { registrar, leer };