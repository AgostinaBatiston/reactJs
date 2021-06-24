import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';

import {Link} from 'react-router-dom';

function  ProductDetail({prop}) {
    return (
        <div>

          <div className="prop card item-detail">
              <img src={`${prop.image}`} alt="Imágen Producto"></img>
              <p key={prop.id} className="prop-p">{prop.title} <span>${prop.price}</span></p>
              <p className="prop-p-description">{prop.description}</p>
              <ItemCount />
              <Link to="/products"><p className="prop-p-volver">volver</p></Link>
          </div>
            
        </div>
    )
}

export default ProductDetail;