import React from 'react';
import 'C:/pruebaramas/src/css/style-header.css';

function Header() {
  const logo = "MiEmpresa";

  return (
    <header class="header">
        <div class="header-container">
            <a href="#" class="logo">
                <span class="logo-lin">LIN</span>
                <span class="logo-tech">TECH</span>
            </a>
            <div class="buscador-container">
                <input type="search" class="buscador-input" placeholder="Buscar productos..." />
            </div>
            <nav class="nav">
                <ul class="nav-list">
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
            <div class="header-actions">
                <button class="icon-btn">
                    🛒
                </button>
                <button class="login-btn">
                    Iniciar sesión
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header;