import React, { createContext, useState } from 'react';

// Creamos el Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addItem = (item, quantity) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  // Función para remover un producto del carrito
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Función para obtener el total de productos
  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
