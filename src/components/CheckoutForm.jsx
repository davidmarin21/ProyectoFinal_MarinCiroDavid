import React, { useContext, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import db from '../firebase/firebaseConfig';

const CheckoutForm = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const order = {
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        date: Timestamp.fromDate(new Date()),
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error creating order:", err);
      setError("Error al confirmar la compra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {orderId ? (
        <p>Orden confirmada. ID: {orderId}</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          {loading ? <p>Procesando...</p> : <button onClick={handleCheckout}>Confirmar Compra</button>}
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
