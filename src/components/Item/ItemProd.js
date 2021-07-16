import React from 'react';

import { Link } from "react-router-dom";

import { Card, Image } from 'semantic-ui-react'
import './ItemProd.css';


function ItemProd({id, image, title, price, autor}) {
    

    return (

        <div className = "item-product" style={{ padding: 10 }} >
        <Link to = { `/details/${id}` } >

        <Card key={id}>
        <Image src = {image} wrapped ui = { false }/> 
        <Card.Content>
        <Card.Header> {title} </Card.Header>
        <Card.Description > {autor } </Card.Description> 

        <Card.Description > ${price } </Card.Description> 
        </Card.Content>
            

        </Card>
        
        </Link>
        


        </div>
    )
}

export default ItemProd;