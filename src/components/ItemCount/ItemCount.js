import React from 'react';
import { Button } from 'semantic-ui-react'

const ItemCount = ({ initial, onAdd}) => {


    


    return ( 

        
            <>
                
                    <Button >-</Button> 
                    <div> {initial} </div> 
                    <Button>+</Button> 
                    <Button onClick= {()=>onAdd(initial) }>
                    Agregar Al Carrito
                    </Button> 
                
                

            </>

     );
}
 
export default ItemCount;