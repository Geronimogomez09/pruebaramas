import React from 'react';
import 'C:/pruebaramas/src/css/style-header.css';

function Header() {
  const logo = "MiEmpresa";

  return (
    <header className="header">
        <div className="header-container">
            <a href="#" className="logo">
                <span className="logo-lin">LIN</span>
                <span className="logo-tech">TECH</span>
            </a>
            <div className="buscador-container">
                <input type="search" className="buscador-input" placeholder="Buscar productos..." />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="terminos.html">terminos y condiciones</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
            <div className="header-actions">
                <button className="icon-btn">
                    🛒
                </button>
                <button className="login-btn">
                    Iniciar sesión
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header;