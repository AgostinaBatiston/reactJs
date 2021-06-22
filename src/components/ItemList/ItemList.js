import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemProd.css'

const ItemProd = () => (
    <Item.Group divided class="container"  className='ItemProducto'>
      <Item>
        <Item.Image src='' />
  
        <Item.Content>
          <Item.Header as='a'>
            
           nombre
            
            </Item.Header>
          <Item.Meta>
            <span className='cinema'>
                autor
            </span>
          </Item.Meta>
          <Item.Description>

          </Item.Description>
          <Item.Extra>
            <Label>Tomo único</Label>
            <ItemCount
            
            initial={1}
            min={0}
           
          />
            <Button primary floated='right'>
             Comprar
              <Icon name='right chevron' />
            </Button>
  
          </Item.Extra>
         
        </Item.Content>
      </Item>
  
      
    </Item.Group>
  )
  
  export default ItemProd

