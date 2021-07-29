import React, {useContext, useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import {CartContext} from '../../Context/CartContext';
import {db} from '../../Firebase/firebase';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import '../views.css'
import './OrderForm.css';

function OrderForm() {
   
    const {totalPrice, cart, clear} = useContext(CartContext);
    const [user, setUser] = useState({});
    const [order, setOrder] = useState('');

    const nameChange = (e) => {
        let customer = user;
        customer.name = e.target.value;
        setUser(customer);
    };

    const emailChange = (e) => {
        let customer = user;
        customer.email = e.target.value;
        setUser(customer);
    };

    const phoneChange = (e) => {
        let customer = user;
        customer.phone = e.target.value;
        setUser(customer);
    };

    const newOrder = async(object) => {
        const newOrder = await db.collection('order').add(object);
        setOrder(newOrder.id);
    };
    
    const orderSubmit = (e) => {
        e.preventDefault();
        let order = {
          buyer: user,
          items: cart,
          date: new Date(),
          total: totalPrice
        };
        newOrder(order);
        console.log("Hola")
        clear([])
    };

    return (
        <div className="div-order">
            <div>
                <h2 className="titleInicio">FORMULARIO DE COMPRA</h2>
            </div>
            <div className="form-cart">
                <section id="form">
                    {totalPrice !== 0 ? (


                            <Form>

                            <Form.Field>
                                <label>Nombre y Apellido</label>
                                <input placeholder='Nombre y Apellido' required onChange={nameChange}/>
                            </Form.Field>

                            <Form.Field>
                                <label>Teléfono</label>
                                <input placeholder='Teléfono' onChange={phoneChange} />
                            </Form.Field>

                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' required onChange={emailChange} />
                            </Form.Field>

                            <Form.Field>
                                <label>Fecha:</label>
                                <SimpleDateTime dateSeparator="-" format="DMY" showTime="0">{new Date()}</SimpleDateTime>
                            </Form.Field>

                            <Form.Field>
                                <label>Total:</label>
                                <p>$ {totalPrice}</p>
                            </Form.Field>

                                <Button type='submit'  onClick={(e)=>orderSubmit(e)}>Enviar </Button>
                            </Form>

                         ) : (
                            <form className="contact-form">
                                <p>¡Orden realizada con éxito!</p>
                                <p>Su número de compra es {order}</p>
                            </form>
                        )
                    }
                    
                </section>
            </div>
        </div>
    )
}

export default OrderForm;