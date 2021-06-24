import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import axios from 'axios';

function ProductDetail({ match }) {
	// console.log('MATCH', match);
	let prodID = match.params.id;
	const [item, setItem] = useState([]);
	console.log('Producto', item);
	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${prodID}`).then((res) =>
			// console.log(res.data)
			setItem(res.data)
		);
	}, [prodID]);

	return (
		<div className='ProductDetail' style={{ padding: 40 }}>
			<h1>Detalles del producto</h1>
			{item.map((item) => {
				return (
					<Card key={item.id}>
						<Image src={item.imgURL} wrapped ui={false} />
						<Card.Content>
                            <Card.Header>{item.name}</Card.Header>

					        <Card.Meta>
						        <span>{item.autor}</span>
					        </Card.Meta>
                    
					        <Card.Description>{item.descripcion}</Card.Description>

                            <Card.Meta>
						        <span>{item.precio}</span>
					        </Card.Meta>

						</Card.Content>
					</Card>
				);
			})}
		</div>
	);
}

export default ProductDetail;
