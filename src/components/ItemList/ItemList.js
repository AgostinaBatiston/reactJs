import React, {useEffect, useState} from 'react'

import {db} from '../../Firebase/firebase';

import ItemProd from '../Item/ItemProd';

function ItemList() {
    const [products, setProducts] = useState([]);

	const addOrEdit = async (object) => {
		console.log(object);
		await db.collection('products').doc().set(object);
		console.log('nuevo producto agregado!');
	};

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
        <div className="item-list">
        {products.map(p => 
            <div className="card" style={{ margin: 10}} key={p.id}>
                <ItemProd 
                    key={p.id}
                    image={p.image} 
                    title={p.title}
                    id={p.id}
                    price={p.price}
                />
            </div>
        )}
    </div>
    )}

export default ItemList;