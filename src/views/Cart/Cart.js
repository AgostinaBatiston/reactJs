import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Button, Item, Label } from 'semantic-ui-react'
import {CartContext} from '../../Context/CartContext' ;
import './Cart.css';


function Cart() {
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext);
    

    return (
        <div className="div-cart">
            <div>
                <h1 className="titulo-cart">Carrito de compras</h1>
            </div>
            <div>
                <section id="form">
                    <div className="form-cart cart">
                        { cart.length === 0 ? 
                            <div>
                                <p><b>TU CARRITO ESTÁ VACÍO</b></p>
                                <Link to="/"><Button className="btn">Ir a productos</Button></Link>
                            </div>
                            :
                            <div >
                                {cart.map( i => 
                                    <div  >
                                        <Item.Group divided>
                                            <Item key={i.item.id}>
                                                <Item.Image src={i.item.image}  />

                                                <Item.Content>
                                                    <Item.Header as='a'>{i.item.title}</Item.Header>
                                                    <Item.Meta>
                                                    <span className='cinema'>{i.quantity} Items</span>
                                                    </Item.Meta>
                                                    <Item.Description>
                                                    <h3 className="cart-p-item">Total item: ${i.item.price * i.quantity}</h3>
                                                    </Item.Description>
                                                    <Item.Extra>
                                                    <Label> <Button color='red' className="remove-item" onClick={removeItem}>X</Button></Label>
                                                    
                                                    </Item.Extra>
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                       
                                    </div>
                                )}
                                <h2 className="cart-total">TOTAL:${totalPrice.toFixed(2)}</h2>
                                <div className="cart-checkout">
                                    <Link to="/order-form">
                                        <Button className="btn">Finalizar compra</Button>
                                    </Link>
                                </div>
                                <div className="cart-buttons">
                                    <Link to="/"><Button className="btn">Seguir comprando</Button></Link>
                                    <Button className="btn" onClick={clear}>Vaciar carrito</Button>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Cart;
