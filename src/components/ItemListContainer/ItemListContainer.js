import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemProd';

const ItemListContainer = () => {
  const onAdd=(cantidad) =>{
      console.log('Agregar al carrito', cantidad);
  }

  return (  
      <>
      <div>
      <ItemList />
      <ItemCount stock="5" 
                  initial="1"
                  onAdd={onAdd}/>
      </div>
      
      </>
      
  );
}

export default ItemListContainer;



