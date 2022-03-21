
function print() {
  const date = new Date();
  console.log( date.getHours().toString() +":"+ date.getMinutes().toString() +":"+ date.getSeconds().toString())
}

setInterval(print, 1000)