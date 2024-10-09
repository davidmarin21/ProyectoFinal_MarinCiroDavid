import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        {/* Asegúrate de tener una imagen en public/cart-icon.png o cambia la ruta */}
        <img src="/cart-icon.png" alt="Carrito de Compras" />
        <span>{cartTotal() > 0 ? cartTotal() : ''}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
