import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react';
import './ItemListContainer.css';

const cardStyles = {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  };

const ItemList = ({ nombre, autor, descripcion, img, precio}) => (
    <div className='ItemProducto'>
      <Card style={cardStyles}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{nombre}</Card.Header>
          <Card.Meta>
            <span className='date'>{autor}</span>
          </Card.Meta>
          <Card.Description>{descripcion}</Card.Description>
        
        </Card.Content>
      </Card>
    </div>
  );
  
  export default ItemList;