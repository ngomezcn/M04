function insertarFila() {
  const table = document.getElementById("Taula");

  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = "Nova cel·la";
  cell2.innerHTML = "Nova cel·la";
}

function insertarFilaV2() {
  const table = document.getElementById("Taula");

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = "Nova cel·la";
  cell2.innerHTML = "Nova cel·la";
}
