let productos = [
  {
    nombre: "Milkybar",
    foto: "milkybar.jpg",
    descripcion: "Chocolate blanco Nestlé Milkybar 100 g.",
    precio: 1.2,
    descuento: "10%",
  },
  {
    nombre: "Crunch",
    foto: "crunch.jpg",
    descripcion: "Chocolate crujiente Crunch Nestlé sin gluten 100 g.",
    precio: 1.32,
    descuento: "20%",
  },
  {
    nombre: "Croissants - La Bella Easo",
    foto: "croissant.jpg",
    descripcion: "Croissants 0% azucares La Bella Easo 360 g.",
    precio: 2.59,
    descuento: "",
  },
  {
    nombre: "Nesquik",
    foto: "nesquik.jpg",
    descripcion:
      "Chocolate con leche con relleno cremoso Nestlé Nesquik 100 g.",
    precio: 1.31,
    descuento: "30%",
  },
];

let subtotal = 0;

function muestraProductos() {
  /** Función para crear los elementos necesarios para poder visualziar los productos. */

  const listaProductos = document.getElementById("productos");
  for (let index = 0; index < productos.length; index++) {
    let producto = productos[index];
    listaProductos.innerHTML += createHtmlProduct(
      producto.nombre,
      producto.foto,
      producto.descripcion,
      producto.precio,
      producto.descuento
    );
  }

  let btn = crearBoton();
  listaProductos.appendChild(btn);
  bindButton(btn.id);
}

function crearBoton() {
  let btn = document.createElement("button");
  btn.id = "btn-comprar";
  btn.innerHTML = "Añadir Productos";
  return btn;
}

function bindButton(btnId) {
  let btn = document.getElementById(btnId);
  btn.addEventListener("click", function (event) {
    anadirProductos();
  });
}

function calcularDescuentoAplicado(desc, precio) {
  let descuento = (precio * desc.slice(0, -1)) / 100;
  return descuento.toFixed(2);
}

function anadirProductos() {
  let hayElementos = false;
  reiniciarTicket();

  for (let index = 0; index < productos.length; index++) {
    const producto = productos[index];
    const cantidad = document.getElementById(producto.nombre).value;

    if (cantidad > 0) {
      subtotal += anadirProducto(producto, cantidad);
      hayElementos = true;
    }
  }

  if (hayElementos)
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
}

function reiniciarTicket() {
  vaciaCarro();
  document.getElementById("subtotal").innerText = "";
  subtotal = 0;
}

function anadirProducto(producto, cantidad) {
  let tabla = document.getElementById("tablebody");
  let tr = document.createElement("tr");

  const descuentoAplicado = calcularDescuentoAplicado(
    producto.descuento,
    producto.precio
  );
  const total = (producto.precio - descuentoAplicado) * cantidad;

  let nombre = producto.nombre;
  if (producto.descuento != "") {
    nombre += "**";
  }

  tr.appendChild(creaCelda(nombre));
  tr.appendChild(creaCelda(producto.precio.toFixed(2)));
  tr.appendChild(creaCelda(descuentoAplicado));
  tr.appendChild(creaCelda(cantidad));
  tr.appendChild(creaCelda(total.toFixed(2)));

  tabla.appendChild(tr);

  return total;
}

function creaCelda(valor) {
  let celda = document.createElement("td");
  celda.innerText = valor;
  return celda;
}

function vaciaCarro() {
  let tabla = document.getElementById("tablebody");
  while (tabla.hasChildNodes()) {
    let child = tabla.removeChild(tabla.firstChild);
  }
}

function createHtmlProduct(nombre, foto, descripcion, precio, descuento) {
  let discStr = "";
  if (descuento != "") {
    discStr = '<p class="descuento">' + descuento + "</p>";
  }

  let product = `
  <article class="articulo">
      <div>
          <p class="nombre w50">` + nombre + `</p>
          ` + discStr + `
      </div>
      <img src="src/` + foto +`">
      <p><span>` + precio + `€</span></p>
      <p>` + descripcion + `</p>
      <p><input type="number" id="` + nombre + `" step="1" min="0"></p>
  </article>`;

  return product.trim();
}

function main() {
  muestraProductos();
}

main();
