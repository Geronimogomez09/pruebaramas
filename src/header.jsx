import React from 'react';
import 'css/style-header.css';

function Header() {
  const logo = "MiEmpresa";

  return (
    <header className="header-contenedor">
      <div className="header-logo">{logo}</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;