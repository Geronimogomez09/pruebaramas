// src/components/Header.jsx
function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
      <h1>Mi Sitio Web con Node y Vite</h1>
      <nav>
        <a href="#inicio" style={{ color: 'white', marginRight: '15px' }}>Inicio</a>
        <a href="#contacto" style={{ color: 'white' }}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;