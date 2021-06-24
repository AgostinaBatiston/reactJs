import React from 'react'
import { Card,  } from 'semantic-ui-react'



const ItemProd = ({ data }) => (
  <Card
    image= {data.imgURL}
    header={data.name}
    meta= {data.autor}
    description= {data.descripcion}
    extra={data.precio}
  />
)



export default ItemProd