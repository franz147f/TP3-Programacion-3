window.addEventListener("DOMContentLoaded", function () {
    const parametros = new URLSearchParams(window.location.search);
    const tbody = document.getElementById("cuerpoTablaInscripciones");

    const actividad = parametros.get("actividad") || "-";
    const lugar = parametros.get("lugar") || "-";
    const dia = parametros.get("dia") || "-";
    const horario = parametros.get("horario") || "-";

    // Detectar participantes
    let participantes = [];
    let i = 1;
    while (parametros.has(`nombre_${i}`) || parametros.has(`dni_${i}`)) {
        const nombre = parametros.get(`nombre_${i}`) || `Participante ${i}`;
        const dni = parametros.get(`dni_${i}`) || "-";
        participantes.push({ nombre, dni });
        i++;
    }

    // Caso de formulario con un solo participante sin subíndice
    if (participantes.length === 0 && (parametros.has("nombre") || parametros.has("dni"))) {
        const nombre = parametros.get("nombre") || "Participante 1";
        const dni = parametros.get("dni") || "-";
        participantes.push({ nombre, dni });
    }

    
    if (participantes.length === 0 && (parametros.has("actividad") || parametros.has("lugar"))) {
        participantes.push({ nombre: "Inscripto", dni: "-" });
    }


    if (tbody) {
        tbody.innerHTML = "";
        if (participantes.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center">No hay inscripciones registradas.</td></tr>`;
            return;
        }

        participantes.forEach((p) => {
            const fila = document.createElement("tr");

            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = p.nombre;

            const celdaDni = document.createElement("td");
            celdaDni.textContent = p.dni;

            const celdaActividad = document.createElement("td");
            celdaActividad.textContent = actividad;

            const celdaLugar = document.createElement("td");
            celdaLugar.textContent = lugar;

            const celdaDia = document.createElement("td");
            celdaDia.textContent = dia;

            const celdaHorario = document.createElement("td");
            celdaHorario.textContent = horario;

            const celdaEstado = document.createElement("td");
            celdaEstado.className = "text-success fw-bold";
            celdaEstado.textContent = "Activo";

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaDni);
            fila.appendChild(celdaActividad);
            fila.appendChild(celdaLugar);
            fila.appendChild(celdaDia);
            fila.appendChild(celdaHorario);
            fila.appendChild(celdaEstado);

            tbody.appendChild(fila);
        });
    }
});
