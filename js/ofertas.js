const productos = [
  { id: 1, nombre: "Celeste", precio: 10, imagen: "img/celeste.jpg" },
  { id: 2, nombre: "Hollow Knight", precio: 20, imagen: "img/jolonai.jpg" },
  { id: 3, nombre: "Cuphead", precio: 30, imagen: "img/cuphead.png" },
  { id: 4, nombre: "Among Us", precio: 40, imagen: "img/amogus.jpg" },
];

const carrito = [];
const favoritos = [];

const root = document.getElementById("root");
root.innerHTML = `
      <section class="ofertas">
        <h2>Productos en Oferta</h2>
        <div class="productos-lista"></div>
      </section>
      <section class="carrito">
        <h2>Carrito de Compras</h2>
        <ul class="carrito-lista"></ul>
        <p class="total">Total: $0</p>
        <button class="pagar-carrito" onclick="pagarCarrito()">Pagar</button>
      </section>
      <section class="favoritos">
        <h2>Favoritos</h2>
        <ul class="favoritos-lista"></ul>
      </section>
    `;

const productosLista = document.querySelector(".productos-lista");
const carritoLista = document.querySelector(".carrito-lista");
const favoritosLista = document.querySelector(".favoritos-lista");
const totalElement = document.querySelector(".total");

function renderProductos() {
  productosLista.innerHTML = "";
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
          <button onclick="agregarAFavoritos(${producto.id})">❤️ Favorito</button>
        `;
    productosLista.appendChild(div);
  });
}

function renderCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          ${item.nombre} - $${item.precio}
          <button onclick="eliminarDelCarrito(${index})">❌</button>
        `;
    carritoLista.appendChild(li);
    total += item.precio;
  });
  totalElement.textContent = `Total: $${total}`;
}

function renderFavoritos() {
  favoritosLista.innerHTML = "";
  favoritos.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          ${item.nombre}
          <button onclick="eliminarDeFavoritos(${index})">❌</button>
        `;
    favoritosLista.appendChild(li);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    carrito.push(producto);
    renderCarrito();
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

function agregarAFavoritos(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto && !favoritos.some((fav) => fav.id === id)) {
    favoritos.push(producto);
    renderFavoritos();
  }
}

function eliminarDeFavoritos(index) {
  favoritos.splice(index, 1);
  renderFavoritos();
}

function pagarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. Agrega productos antes de pagar.");
    return;
  }
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  alert(`Gracias por tu compra. El total a pagar es $${total}.`);
  carrito.length = 0;
  renderCarrito();
}

renderProductos();
