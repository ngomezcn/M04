function listaPropiedades(obj) {
  var result = ``;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      console.log(`${i} = ${obj[i]}`);
    }
  }
  return result;
}

function calcularEdad(obj) {
  var r = Date.now() - obj.fecha_nacimiento;
  return ((r/31556926)/1000).toPrecision(3)
}

var estudiante = new Object(); //TAMBIEN var
estudiante.nombre = "Naim";
estudiante.curso = "DAMi1";
listaPropiedades(estudiante);

console.log();
estudiante.fecha_nacimiento = new Date(2002, 09, 03);
estudiante.apellidos = "Gomez I Cano";
estudiante.edad = calcularEdad(estudiante);
listaPropiedades(estudiante)

