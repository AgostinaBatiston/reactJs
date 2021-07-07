import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Button } from 'semantic-ui-react'
import {CartContext} from '../../Context/CartContext' ;
import './Cart.css';

function Cart() {
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext);

    return (
        <div className="div-cart">
            <div>
                <h2 className="titulo">Carrito de compras</h2>
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
                            <div className="cart-div">
                                {cart.map( i => 
                                    <div className="cart-item"  key={i.item.id}>
                                        <img className="img-cart" src={i.item.image} alt="Imágen producto en carrito"></img>
                                        <p>{i.quantify} {i.item.title} ${i.item.price}</p>
                                        <p className="cart-p-item">total item: ${i.item.price * i.quantify}</p>
                                        <p className="remove-item" onClick={removeItem}>X</p>
                                    </div>
                                )}
                                <p className="cart-total">TOTAL:${totalPrice.toFixed(2)}</p>
                                <div className="cart-checkout">
                                    <Button className="btn">PAGAR</Button>
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
