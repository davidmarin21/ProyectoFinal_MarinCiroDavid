import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image}/>
          <h3>Producto: {item.name}</h3>
          <p>Precio: {item.price}</p>
          <Link to={`/item/${item.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
