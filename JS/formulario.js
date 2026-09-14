/*EJERCICIO Nº 1
Función para validar la fecha de nacimiento: verificar que el participante tenga una fecha de
nacimiento válida. No se permitirá ingresar una fecha posterior a la fecha actual. Mensaje: “La
fecha de nacimiento no puede ser posterior a la fecha actual”.
*/

function validar_formulario(){
    if (validar_fecha() == false){
        return false;
    }
    if (validar_dni() == false){
        return false;
    }
    return true;
}

function validar_fecha(){
    const fecha_actual = new Date();
    const fechas = document.querySelectorAll("input[type='date']");

    for (let i = 0; i < fechas.length; i++) {
        const valor = fechas[i].value;
        if (!valor) continue;
        const fecha_nacimiento = new Date(valor);

        if (fecha_nacimiento > fecha_actual){
            alert("La fecha de nacimiento no puede ser posterior a la fecha actual.");
            fechas[i].focus();
            return false;
        }
    }
    return true;
}

/*Verificar que el DNI contenga exactamente 8 dígitos. Si no cumple la condición, mostrar: “El DNI
debe contener 8 dígitos”.*/
function validar_dni(){
    const dnis = document.querySelectorAll("input[name^='dni']");

    for (let i = 0; i < dnis.length; i++) {
        const dni_ingresado = dnis[i].value.trim();
        if (dni_ingresado.length != 8){
            alert("El DNI debe contener 8 dígitos");
            dnis[i].focus();
            return false;
        }
        
        if (isNaN(dni_ingresado)) {
            alert("El DNI solo debe contener números, sin puntos ni letras.");
            dnis[i].focus();
            return false;
        }
    }
    return true;
}

/* 
   EJERCICIO Nº 5: Generación dinámica de participantes
  = */
let plantillaParticipante = null;

window.addEventListener("DOMContentLoaded", function () {
    const primerBloque = document.querySelector(".bloque-participante");
    if (primerBloque) {
        plantillaParticipante = primerBloque.cloneNode(true);
    }
});

function generarParticipantes() {
    const inputCantidad = document.getElementById("cantidadParticipantes");
    const cantidad = parseInt(inputCantidad.value);
    const contenedor = document.getElementById("contenedorParticipantes");

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        alert("Por favor, ingrese un número de participantes válido (entre 1 y 10).");
        return;
    }

    if (!plantillaParticipante) {
        const primerBloque = document.querySelector(".bloque-participante");
        if (primerBloque) {
            plantillaParticipante = primerBloque.cloneNode(true);
        }
    }

    contenedor.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {
        
        const nuevoBloque = plantillaParticipante.cloneNode(true);
        nuevoBloque.id = `bloque-participante-${i}`;

        const titulo = nuevoBloque.querySelector(".titulo-participante");
        if (titulo) {
            titulo.textContent = `Participante ${i}`;
        }

        
        const inputs = nuevoBloque.querySelectorAll("input, select, textarea");
        inputs.forEach(el => {
            if (el.type === "radio") {
                const baseName = el.name.replace(/_\d+$/, "");
                el.name = `${baseName}_${i}`;
                if (el.id) {
                    const baseId = el.id.replace(/_\d+$/, "");
                    el.id = `${baseId}_${i}`;
                }
            } else if (el.id) {
                const baseId = el.id.replace(/_\d+$/, "");
                el.id = `${baseId}_${i}`;
                if (el.name) {
                    const baseName = el.name.replace(/_\d+$/, "");
                    el.name = `${baseName}_${i}`;
                }
            }
        });

        const labels = nuevoBloque.querySelectorAll("label");
        labels.forEach(lbl => {
            if (lbl.htmlFor) {
                const baseFor = lbl.htmlFor.replace(/_\d+$/, "");
                lbl.htmlFor = `${baseFor}_${i}`;
            }
        });

        contenedor.appendChild(nuevoBloque);
    }
}






