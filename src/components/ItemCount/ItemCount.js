import React, {useState} from 'react';
import './ItemCount.css';
import { Button} from 'semantic-ui-react';


    const ItemCount = ({stock, onAdd}) => {
            const [quantity, setQuantity] = useState(1);
            stock = 5;
            const handlerPlus = () => {
            setQuantity((quantity === stock) ? stock : quantity + 1 )
            };
            const handlerMinus = () =>{
            setQuantity((quantity >= 2) ? quantity - 1 : quantity)
            }
        return (
            <div className="card card-main">
                <div className="card-body">
                    <div className="card card-content">
                        <Button negative onClick={handlerMinus} > - </Button>
                        <p id="counter-value">{quantity}</p>
                        <Button positive  onClick={handlerPlus}> + </Button>
                        
                    </div>
                    <Button onClick={()=>onAdd(quantity)} >Agregar al carrito </Button>
                </div>
            </div>
        )
    
}

export default ItemCount;