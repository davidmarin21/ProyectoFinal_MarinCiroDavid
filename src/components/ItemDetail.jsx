import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
    setAddedToCart(true);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image}/>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      {addedToCart ? <p>Producto agregado al carrito</p> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;
