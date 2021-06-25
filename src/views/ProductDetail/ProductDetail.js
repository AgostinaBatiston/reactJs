import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

function  ProductDetail({prop}) {
    return (
        <div>
                
            <div >
              <img src={`${prop.image}`} alt="Img-producto"></img>
              <p key={prop.id} className="prop-p">{prop.title} <span>${prop.price}</span></p>
              <p className="prop-p-description">{prop.description}</p>
              <ItemCount />
              <Link to="/">
                  <Button>volver</Button>
                  
                </Link>
          </div>
          
            
        </div>
    )
}

export default ProductDetail;