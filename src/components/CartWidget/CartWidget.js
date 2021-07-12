import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import {CartContext} from '../../Context/CartContext';

function CartWidget () {
    const {cart, totalQuantity} = useContext(CartContext);

    return ( 

        <div>

        { cart.length === 0 ?
        <div></div>
        :
        <Link to='/cart'>
            <div>
                <Icon>
                    <i aria-hidden="true" class="shopping bag big icon"></i>
                </Icon>
                <p>{totalQuantity}</p>
            </div>
       </Link>
        }

        </div>
     );
}
 
export default CartWidget;