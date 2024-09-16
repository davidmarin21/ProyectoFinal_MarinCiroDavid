import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <div style={styles.logo}>
        <h2>Techno Center</h2>
      </div>
      <ul style={styles.navLinks}>
        <li><a href="">Inicio</a></li>
        <li><a href="">Tienda</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#A3BAC3',
    color: '#fff',
   
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem',
  },
  link: {
    marginLeft: '1rem',
    color: '#fff',
    textDecoration: 'none',
  }
};

export default NavBar;
