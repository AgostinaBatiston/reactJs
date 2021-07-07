import React, {useState, useContext} from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Card, Image,Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext'
import './ProductDetail.css';


function  ProductDetail({prop}) {
    const [quantify, setQuantify] = useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (e) => {
      setQuantify(e);
      addItem(prop, e);

    }



    return (
        <div className="ItemDetail-card" style={{ padding: 40 }}>
                <Card>
                  <Image src={`${prop.image}`} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header key={prop.id}>{prop.title} </Card.Header>
                    
                    <Card.Description>
                    {prop.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    ${prop.price}
                  </Card.Content>
                  <Card.Content extra>
                  {quantify === 0 ? 
                    <ItemCount stock={prop.stock} name={prop.title} onAdd={onAdd}/>
                :   <div>
                    <p><b>Compraste {quantify} {prop.title}</b></p>
                    <Link to={'/cart'} ><button className="btn btn-secondary">Terminar compra</button></Link>
                    </div>      
                    
                }
             
                    </Card.Content>
                </Card>
                
                <Link to="/">
                  <Button>Volver</Button>
                  
                </Link>
           
          
            
        </div>
    )
}

export default ProductDetail;