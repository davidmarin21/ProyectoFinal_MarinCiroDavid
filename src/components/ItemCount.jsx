import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleRemove}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default ItemCount;
