import React from 'react';
import { Card} from 'semantic-ui-react';

const ItemProd = ({ data }) => {
	return (
		<div className='ItemProd'>
			<Card style={{ width: 300 }}>
				
				<Card.Content>
					<Card.Header>{data.name}</Card.Header>
					<Card.Meta>
						<span>{data.autor}</span>
					</Card.Meta>
                    
					<Card.Description>{data.descripcion}</Card.Description>
                    <Card.Meta>
						<span>{data.precio}</span>
					</Card.Meta>
				</Card.Content>
			</Card>
		</div>
	);
};

export default ItemProd;