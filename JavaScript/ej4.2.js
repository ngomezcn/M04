
function sonIguales(ob1, ob2) {
    var check =  JSON.stringify(alumno1) == JSON.stringify(alumno2)
    if(check) {
        console.log("Son iguales")
    } else{
        console.log("Son diferentes")
    }
}

var alumno1 = {
  nombre: "Aina",
  apellido: "Garcia",
  edad: 21,
  curso: "DAMr1",
};

var alumno2 = {
  nombre: "Aina",
  apellido: "Garcia",
  edad: 21,
  curso: "DAMr1",
};

sonIguales(alumno1, alumno2)

alumno1.nombre = "sdfdsf";

sonIguales(alumno1, alumno2)


