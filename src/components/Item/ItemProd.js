import React,{useContext, useState} from 'react';
import {CartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { Card, Image } from 'semantic-ui-react'
import './ItemProd.css';


function ItemProd({id, image, title, price, prop }) {
    const [quantify, setQuantify] =useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (e) => {
        setQuantify(e);
        addItem(prop, e);
    }

    return (

        <div className = "item" >
        <Link to = { `/detail/${id}` } >

        <Card key={id}>
        <Image src = {image} wrapped ui = { false }/> 
        <Card.Content>
        <Card.Header> {title} </Card.Header>

        <Card.Description > {price } </Card.Description> 
        </Card.Content>
            

        </Card>
        <Card>
            <div>
                <ItemCount onAdd={onAdd}/>
            </div>
        </Card>

        </Link>
        


        </div>
    )
}

export default ItemProd;