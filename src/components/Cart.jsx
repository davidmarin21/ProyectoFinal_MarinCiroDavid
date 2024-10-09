import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">Ir al Checkout</Link>
    </div>
  );
};

export default Cart;
