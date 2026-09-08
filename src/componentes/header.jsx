import React from 'react';
import styles from '../css/header.module.css'; // 1. Importas asignando a 'styles'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}> {/* O también puedes usar sintaxis de corchetes si prefieres mantener los guiones */}
                <a href="#" className={styles['logo']}>
                    <span className={styles['logo-wiki']}>Wiki</span>
                    <span className={styles['logo-craft']}>Craft</span>
                </a>
                <div className={styles['buscador-container']}>
                    <input type="search" className={styles['buscador-input']} placeholder="Buscar productos..." />
                </div>
                <nav className={styles.nav}>
                    <ul className={styles['nav-list']}>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="terminos.html">términos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <div className={styles['header-actions']}>
                    <button className={styles['login-btn']}>Iniciar sesión</button>
                </div>
            </div>
        </header>
    );
}

export default Header;