/*3.1. Función constructora: definir una función constructora llamada, Actividad, que permita crear
objetos de tipo actividad deportiva.
*/
function Actividad(nombre,lugar,dia,horario,cupo,estado){
    this.nombre=nombre;
    this.lugar=lugar;
    this.dia=dia;
    this.horario=horario;
    this.cupo=cupo;
    this.estado=estado;
}
/*3.2. Clase SistemaDeportes: definir una clase llamada, SistemaDeportes.
La clase deberá contener*/
class SistemaDeportes{
    constructor(){
        this.actividades=[];
    }
    agregarActividad(actividad){
        this.actividades.push(actividad);
        console.log(`la actividad ${actividad.nombre} fue agregada correctamente`);

    }
    listarActividades(){
        this.actividades.forEach(function(act,index){
            console.log(`${index+1} - ${act.nombre}-${act.lugar}-${act.dia}-${act.estado}`);
        } );
        return this.actividades
    }
}

// 1. Iniciamos el sistema
const miSistema = new SistemaDeportes();

// 2. Creamos un par de actividades usando tu función constructora del punto 3.1
const act1 = new Actividad("futbol","cancha UNCA","Miercoles","15:00",4,"disponible")
const act2 = new Actividad("Basquet", "Polideportivo", "Martes", "10:00", 15, "completo");
const act3 = new Actividad("Vóley", "Polideportivo", "Lunes", "18:00", 12, "disponible");
const act4 = new Actividad("Atletismo", "Cancha UNCA", "viernes", "18:00", 16, "disponible");
// 3. Usamos el método de la clase para agregarlas al array interno
miSistema.agregarActividad(act1);
miSistema.agregarActividad(act2);
miSistema.agregarActividad(act3);
miSistema.agregarActividad(act4);

// 4. Listamos las actividades para ver el resultado
miSistema.listarActividades();
mostrarActividadesEnTabla(miSistema.actividades);
function mostrarActividadesEnTabla(arrayActividades) {
    
    const tbody = document.getElementById("cuerpoTabla");

    tbody.innerHTML = "";

   
    arrayActividades.forEach(function(actividad) {
    

        const fila = document.createElement("tr");
        
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = actividad.nombre;
        
        const celdaLugar = document.createElement("td");
        celdaLugar.textContent = actividad.lugar;
        
        const celdaDia = document.createElement("td");
        celdaDia.textContent = actividad.dia;
        
        const celdaHorario = document.createElement("td");
        celdaHorario.textContent = actividad.horario;
        
        const celdaCupo = document.createElement("td");
        celdaCupo.textContent = actividad.cupo;
        
        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = actividad.estado;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaLugar);
        fila.appendChild(celdaDia);
        fila.appendChild(celdaHorario);
        fila.appendChild(celdaCupo);
        fila.appendChild(celdaEstado);

        tbody.appendChild(fila);
    });
}
mostrarActividadesEnTabla(miSistema.actividades);