import React , {useEffect, useState} from 'react'
import { Card, Image } from 'semantic-ui-react';
import './ProductDetail.css';
import axios from 'axios';



function ProductDetail({ match }){
    
    let itemID = match.params.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios(`https://60d29021858b410017b2de3b.mockapi.io/Books/${itemID}`).then((res) => {
            setProduct(res.data);
        });
    } , [itemID]);

    return(
        <div className='ItemDetail' style={{ padding: 40 }}>
            <h1 className="">
                Detalles del producto
            </h1>
            
            {product.map((prod) => {
				return (
					<Card key={prod.id}>
						<Image src={prod.imgURL} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{prod.name}</Card.Header>
							<Card.Meta>
								<span>{prod.autor}</span>
							</Card.Meta>
							<Card.Description>{prod.descripcion}</Card.Description>
                            <Card.Header>{prod.precio}</Card.Header>
						</Card.Content>
					</Card>
				);
			})}
           
        </div>
        );
}

export default ProductDetail;