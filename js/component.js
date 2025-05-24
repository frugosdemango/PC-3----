function HeaderComponent() {
  return (
    <header className="header">
      <h1>ATLUS</h1>
      <nav className="navbar">
        <button className="menu-toggle" id="menu-toggle">
          ☰
        </button>
        <ul className="menu" id="menu">
          <li>
            <a href="index.html">TIENDA</a>
          </li>
          <li>
            <a href="ACERCA DE.html">ACERCA DE</a>
          </li>
          <li>
            <a href="SOPORTE.html">SOPORTE</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function FooterComponent() {
  return (
    <footer className="footer">
      <address>Contacto: contacto@atlusito.com</address>
      <small>&copy; 2025 ATLUS. Todos los derechos reservados.</small>
    </footer>
  );
}

ReactDOM.render(
  <HeaderComponent />,
  document.getElementById("headercomponent")
);

ReactDOM.render(
  <FooterComponent />,
  document.getElementById("footercomponent")
);
