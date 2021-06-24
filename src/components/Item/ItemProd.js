import React from 'react'
import { Item } from 'semantic-ui-react'



const ItemProd = ({ data }) => (
  
    <Item>
      <Item.Image size='tiny' src={data.imgURL} />

      <Item.Content>
        <Item.Header>{data.name}</Item.Header>
        <Item.Meta>
		<span className='stay'>{data.autor}</span>
		</Item.Meta>
		<Item.Meta>
          <span className='price'>{data.precio}</span>
        </Item.Meta>
        <Item.Description>{data.descripcion}</Item.Description>
      </Item.Content>
    </Item>

   
)

export default ItemProd