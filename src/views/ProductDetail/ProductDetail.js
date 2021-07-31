import React, {useState, useContext} from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {Button, Card, Image } from 'semantic-ui-react'
import {CartContext} from '../../Context/CartContext'
import './ProductDetail.css';




function  ProductDetail({prop}) {
  const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (e) => {
        setQuantity(e);
        addItem(prop, e);
    }

    return (
        <div className="ItemDetail">
             

                <Card>
                    <Image src={prop.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header key={prop.id}>{prop.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{prop.autor}</span>
                    </Card.Meta>
                    <Card.Content>
                       <h4>${prop.price}</h4>
                        
                    </Card.Content>
                    
                    <Card.Description>
                    {prop.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    
                    {quantity === 0 ? 
                    <ItemCount stock={prop.stock} name={prop.title} onAdd={onAdd}/>
                :   <div className="terminar-compra">
                        <p><b>Compraste {quantity} {prop.title}</b></p>
                    <div>
                    <Link to={'/cart'} ><Button>Terminar compra</Button></Link>
                    <Link to={'/'} ><Button>Seguir comprando</Button></Link>
                    </div>
                    </div>      
                    
                }
                    
                    </Card.Content>
                </Card>
                
                <Card>
                <Link to="/"><Button>volver</Button></Link>
                </Card>
            
        </div>
    )
}

export default ProductDetail;