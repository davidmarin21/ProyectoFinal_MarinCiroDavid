import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simulación de una llamada a una API o promesa
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        const mockItems = [
          { id: 1, name: 'Item 1', category: 'electronics' },
          { id: 2, name: 'Item 2', category: 'clothing' },
          { id: 3, name: 'Item 3', category: 'electronics' },
        ];
        resolve(mockItems);
      }, 1000);
    });

    fetchItems.then((data) => {
      if (categoryId) {
        setItems(data.filter((item) => item.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
