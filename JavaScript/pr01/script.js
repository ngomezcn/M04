const codigo = [];
const maxIntento = 4;
let currentIntent = 0;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
  for (let i = 0; i < 5; i++) {
    codigo[i] = Math.floor(Math.random() * 10);
  }
  console.log(codigo);
}

codigoSecreto();

function Comprobar() {
  getInputUser();
}

function contarNumero(codigo, numero) {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    if (numero == codigo[i]) {
      total++;
    }
  }
  return total;
}

function estaEnPos(codigo, num, pos) {
  let exist = false;
  if (codigo[pos] == num) {
    exist = true;
  }
  return exist;
}

function busca(codigo, codigoUser) {
  let sol = [5];
  let conterMAtch = 0;
  for (let i = 0; i < codigo.length; i++) {
    conterMAtch = contarNumero(codigo, codigoUser[i]);
    sol[i] = conterMAtch;
    if (conterMAtch > 0) {
      if (estaEnPos(codigo, codigoUser[i], i)) {
        sol[i] = "ok";
      }
    }
  }
  return sol;
}

function getInputUser() {
  const inputNumber = document.getElementById("numero").value;
  const row = document.getElementById("Result").children[currentIntent];

  let sol = busca(codigo, inputNumber);

  for (let i = 0; i < 5; i++) {
    row.children[i].children[0].innerHTML = inputNumber[i];
    if (sol[i] == "ok") {
      row.children[i].children[0].style.backgroundColor = "green";
    }
    if (sol[i] > 0) {
      row.children[i].children[0].style.backgroundColor = "yellow";
    }
  }

  setInfo("Tienes " + (maxIntento-currentIntent-1))

  currentIntent += 1;
  let isWinner = hasWin(sol);
  if (currentIntent == maxIntento || isWinner) {
    endGame(isWinner);
  }
}

function hasWin(res) {
  for (let i = 0; i < res.length; i++) {
    if (res[i] != "ok") {
      return false;
    }
  }
  return true;
}

function endGame(isWinner) {
  const btn = document.getElementById("check");
  btn.disabled = true;
  btn.style.backgroundColor = "#BABABA";

  const infoContainer = document.getElementsByClassName('w100 info')[0]
  const infoText = document.getElementById("info");
  if (isWinner) {
    setInfo("Has acertado, enhorabuena!!");
    infoContainer.style.backgroundColor = "green";
  } else {
    setInfo("Has perdido, zzzz");
    infoContainer.style.backgroundColor = "red";
  }
}

function setInfo(text) {
  const infoText = document.getElementById("info");
  infoText.innerText = text;
}

function generateResultCels() {
  var parent = document.getElementById("Result");

  for (let i = 0; i < maxIntento; i++) {
    var rowContainer = document.createElement("div");
    rowContainer.classList.add("rowResult", "w100", "flex", "wrap");
    for (let j = 0; j < 5; j++) {
      var squareContainer = document.createElement("div");
      squareContainer.classList.add("w20");

      var square = document.createElement("div");
      square.classList.add("celResult", "flex");

      squareContainer.appendChild(square);
      rowContainer.appendChild(squareContainer);
    }
    parent.appendChild(rowContainer);
  }
}

generateResultCels();