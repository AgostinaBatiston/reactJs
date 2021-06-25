import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Card, Image,Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './ProductDetail.css';

function  ProductDetail({prop}) {
    return (
        <div className="ItemDetail-card" style={{ padding: 40 }}>
                <Card>
                  <Image src={`${prop.image}`} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header key={prop.id}>{prop.title} </Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                    {prop.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    ${prop.price}
                  </Card.Content>
                  <Card.Content extra>
                      <ItemCount />
             
                    </Card.Content>
                </Card>
                <Link to="/">
                  <Button>Volver</Button>
                  
                </Link>
           
          
            
        </div>
    )
}

export default ProductDetail;