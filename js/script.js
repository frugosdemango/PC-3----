const destacados = [
  {
    imagen: "img/persona5royal.png",
  },
];

const ofertas = [
  {
    imagen:
      "https://cdn1.epicgames.com/offer/a195e51c853d46038d13c49b882a9215/Epic_SSGenerations_BaseGame_PortraitOfferImage_1200X1600_1200x1600-922ab0cdbb3421bae269f6e8a9c68141",
  },
  {
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",
  },
  { imagen: "https://uvejuegos.com/img/caratulas/65152/Among-Us_logo.jpg" },
];

const categorias = [
  { imagen: "img/survival.png" },
  { imagen: "img/coop.png" },
  { imagen: "img/fight.png" },
];

function crearJuego(juego, clase = "") {
  const div = document.createElement("div");
  div.className = `juego ${clase}`;
  div.tabIndex = 0;
  div.innerHTML = `<img src="${juego.imagen}" />`;

  div.addEventListener("mouseenter", () => div.classList.add("animado"));
  div.addEventListener("mouseleave", () => div.classList.remove("animado"));
  return div;
}

const root = document.getElementById("root");
root.innerHTML = `
  <section class="main-content">
    <div class="destacados">
      <h2>DESTACADOS</h2>
      <div class="buscador">
        <input type="text" placeholder="Buscar...">
        <button>🔍</button>
      </div>
      <div class="juegos-destacados"></div>
    </div>
    <aside>
      <div class="ofertas">
        <h3>OFERTAS</h3>
        <div class="ofertas-lista"></div>
      </div>
      <div class="categorias">
        <h3>CATEGORIAS</h3>
        <div class="categorias-lista"></div>
      </div>
    </aside>
  </section>
`;

const destacadosDiv = root.querySelector(".juegos-destacados");
destacados.forEach((j) =>
  destacadosDiv.appendChild(crearJuego(j, "destacado"))
);

const ofertasDiv = root.querySelector(".ofertas-lista");
ofertas.forEach((j) => ofertasDiv.appendChild(crearJuego(j, "oferta")));

// Redirigir al hacer clic en la sección "OFERTAS"
const ofertasSection = root.querySelector(".ofertas");
ofertasSection.addEventListener("click", () => {
  window.location.href = "OFERTAS.html"; // Cambia "OFERTAS.html" por la ruta de tu página de ofertas
});

const categoriasDiv = root.querySelector(".categorias-lista");
categorias.forEach((j) =>
  categoriasDiv.appendChild(crearJuego(j, "categoria"))
);
