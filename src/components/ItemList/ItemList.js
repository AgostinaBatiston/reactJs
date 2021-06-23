import React, { useState, useEffect } from 'react';
import ItemProd from '../Item/ItemProd';
import axios from 'axios';
import './ItemList.css';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';

function ItemList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://60d29021858b410017b2de3b.mockapi.io/Books').then((res) => {
			
			setItems(res.data);
		});
	}, []);

	return (
		<div className='ItemList-container'>
			{items.map((item) => {
			
				return (
					<div key={item.id} className='ItemCard-Container'>
						<Link to={`/detail/${item.id}`}>
							<ItemProd data={item} />
						</Link>

            
					</div>
				);
			})}
		</div>
	);
}

export default ItemList;