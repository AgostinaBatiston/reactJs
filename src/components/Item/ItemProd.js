import React from 'react';
import {Link} from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


function ItemProd({prop}) {
    return (
       
        <div className="item">
            <Link to={`/detail/${prop.id}`}>

            <Card>
                <Image src={`${prop.image}`} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{prop.title}</Card.Header>
               
                <Card.Description>
                    {prop.price}
                </Card.Description>
                </Card.Content>
               
            </Card>


            </Link>
            
            
        </div>
    )
}

export default ItemProd;