import React, { useState, useEffect } from 'react';
import ItemProd from '../Item/ItemProd'
import './ItemList.css';
import axios from 'axios'


function ItemList(){
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://60d29021858b410017b2de3b.mockapi.io/Books').then((res) =>
			//console.log(res.data)
			setItems(res.data)
		);
	}, []);

	return (
		 <div className="ItemList-container">
			 {items.map((item) => {
				return(
					<div key={item.id} className="ItemList-container">
						<ItemProd  data={item}/>
					</div>
				)
			 })}
		 </div>
	)
}

export default ItemList;