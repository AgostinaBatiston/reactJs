import React, {useEffect, useState} from 'react'

import {db} from '../../Firebase/firebase';

import ItemProd from '../Item/ItemProd';

function ItemList() {
    const [products, setProducts] = useState([]);

	

	const getProducts = () => {
		db.collection('products').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			setProducts(docs);
		});
	};

	
	useEffect(() => {
		getProducts();
	}, []);

    return (
        <div >
        {products.map(p => 
            <div className="card" key={p.id}>
                <ItemProd 
                    key={p.id}
                    image={p.image} 
                    title={p.title}
                    autor={p.autor}
                    id={p.id}
                    price={p.price}
                />
            </div>
        )}
    </div>
    )}

export default ItemList;