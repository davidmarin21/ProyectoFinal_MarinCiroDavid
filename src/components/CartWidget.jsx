
const CartWidget = () => {
  return (
    <div style={styles.cartWidget}>
      🛒
      <span style={styles.cartCount}>0</span>
    </div>
  );
};

const styles = {
  cartWidget: {
    position: 'relative',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  cartCount: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    color: '#fff',
    padding: '0.2rem 0.5rem',
    fontSize: '0.8rem',
  }
};

export default CartWidget;
