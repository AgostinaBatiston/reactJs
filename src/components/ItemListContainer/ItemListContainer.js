import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'




const ItemListContainer = () => (
  <Item.Group divided class="container"  className='ItemProducto'>
    <Item>
      <Item.Image src='https://www.zonanegativa.com/imagenes/2019/12/Baoh.jpg' />

      <Item.Content>
        <Item.Header as='a'>Baoh: El visitante</Item.Header>
        <Item.Meta>
          <span className='cinema'>Autor: Hirohiko Araki</span>
        </Item.Meta>
        <Item.Description>Este manga cuenta las aventuras de Ikuro y Sumire, un adolescente y una niña que fueron víctimas de experimentos genéticos y psíquicos, respectivamente, a manos de la corporación Doress, la misma que ahora ha puesto precio a sus cabezas.</Item.Description>
        <Item.Extra>
          <Label>Tomo único</Label>
          <ItemCount/>
          <Button primary floated='right'>
           Comprar
            <Icon name='right chevron' />
          </Button>

        </Item.Extra>
       
      </Item.Content>
    </Item>

    
  </Item.Group>
)

export default ItemListContainer
