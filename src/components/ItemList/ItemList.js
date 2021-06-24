import React, { useState, useEffect } from 'react';
import ItemProd from '../Item/ItemProd'
import { Link } from "react-router-dom";
import './ItemList.css';
import axios from 'axios'


function ItemList(){
	
	

	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios('https://60d29021858b410017b2de3b.mockapi.io/Books').then((res) =>
			//console.log(res.data)
			setProducts(res.data)
		);
	}, []);

	return (
		 <div className="ItemList-container">
			 {products.map((prod) => {
				return(
					<>
					<div key={prod.id} className="ItemList-container">
						<Link to={`/detail/${prod.id}`}>
							<ItemProd  data={prod}/>
						</Link>
					</div>
					
					</>
				)
			 })}
		 </div>
	)
}

export default ItemList;