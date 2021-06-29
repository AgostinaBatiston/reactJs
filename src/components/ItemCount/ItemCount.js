import React, {useState} from 'react';
import './ItemCount.css';
import { Button} from 'semantic-ui-react';


    const ItemCount = ({stock, onAdd}) => {
            const [quantify, setQuantify] = useState(1);
            stock = 5;
            const handlerPlus = () => {
            setQuantify((quantify === stock) ? stock : quantify + 1 )
            };
            const handlerMinus = () =>{
            setQuantify((quantify >= 2) ? quantify - 1 : quantify)
            }
        return (
            <div className="card card-main">
                <div className="card-body">
                    <div className="card card-content">
                        <Button negative onClick={handlerMinus} > - </Button>
                        <p id="counter-value">{quantify}</p>
                        <Button positive  onClick={handlerPlus}> + </Button>
                        
                    </div>
                    <Button onClick={()=>onAdd(quantify)} >Comprar </Button>
                </div>
            </div>
        )
    
}

export default ItemCount;