import React, { useEffect, useState, useContext} from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import ItemCount from '../../components/ItemCount/ItemCount';
import CartContext from '../../contexts/CartContext';
import axios from 'axios';

function ProductDetail({ match, product }) {

    const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: article.id,
      name: article.name,
      descripcion: article.descripcion,
      stock: article.stock,
      precio: article.precio,
      img: article.imgURL,
    };

    setCart((value) => [...value, prod]);
  };


	let prodID = match.params.id;
	const [item, setItem] = useState([]);
	console.log('Producto', item);
	useEffect(() => {
		axios(`https://60d29021858b410017b2de3b.mockapi.io/Books/${prodID}`).then((res) =>
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
                            <Card.Meta>
                            <ItemCount
                                    initial={1}
                                    min={0}
                                    max={product.stock}
                                    setQuantity={setQuantity}
                                />
					        </Card.Meta>
                            <Card.Meta>
                                <Button onClick={handleClick}>Agregar al carrito {quantity}</Button>
                            </Card.Meta>

						</Card.Content>
					</Card>
				);
			})}
		</div>
	);
}

export default ProductDetail;
