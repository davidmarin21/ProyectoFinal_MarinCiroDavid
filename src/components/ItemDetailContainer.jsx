import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    // Simulación de una llamada a una API o promesa
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const mockItem = { id: itemId, name: `Item ${itemId}`, description: 'Descripción del producto seleccionado' };
        resolve(mockItem);
      }, 1000);
    });

    fetchItem.then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
