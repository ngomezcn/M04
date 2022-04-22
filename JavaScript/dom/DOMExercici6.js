function insertarFila() {
  const table = document.getElementById("Taula");

  table.rows[1].cells[1].innerHTML = "Pop!_OS"
  console.log(table.rows[x].cells[y])
}

function insertarFilaV2(x, y) {
  const table = document.getElementById("Taula");

  table.rows[x].cells[y].innerHTML = "Pop!_OS"
  console.log(table.rows[x].cells[y])
}
