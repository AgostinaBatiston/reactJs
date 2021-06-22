import React from 'react';

const ItemCount = ({ initial, onAdd}) => {


    


    return ( 

        
            <>
                <button >-</button> 
                <div> {initial} </div> 
                <button>+</button> 
                <button
                    onClick= {()=>onAdd(initial) }
                >Agregar Al Carrito</button> 

            </>

     );
}
 
export default ItemCount;