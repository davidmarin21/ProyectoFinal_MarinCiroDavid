import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemDetail;
