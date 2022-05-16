

  function ej7() {
    const tbl = document.getElementById("Taula");
  
    const y = prompt("Y")
    const x = prompt("X")
  
    for (let i = 0; i < y; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < x; j++) {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`${i} - ${j}`));
      }
    }
  }
  