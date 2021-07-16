import React, { useState, useEffect } from 'react';
import ItemProd from '../Item/ItemProd'
import {db} from '../../Firebase/firebase';
import '../../views/views.css'



function Categories({match}) {
    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);

    const getItems = () => {
		db.collection('products').where('category','==', itemCategory).get().then((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCategory(docs);
		});
	};
	useEffect(() => {
    getItems();
	});

    return (
        <div>
            <h1 className="titleInicio">{itemCategory}</h1>
            <div className="card category">
                {category.map(p=> <ItemProd image={p.image} title={p.title} autor={p.autor} id={p.id} price={p.price} />)}
            </div>
        </div>
    )
}


export default Categories;
