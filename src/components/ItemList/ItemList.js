import React, {useEffect, useState} from 'react'
import ItemProd from '../Item/ItemProd';

import './ItemList.css';


function ItemList() {

    const [products, setProducts] = useState([])
   
    useEffect(() => {
        setTimeout(() => {
          fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then( res => setProducts(res));
        }, 2000);
       
    }, [])


    return (
        <div className="item-list">
        {products.map(p => 
            <div className="card" style={{ margin: 10}} key={p.id}>
                <ItemProd
                    prop={p} key={p.id}
                />
               
            </div>
        )}
    </div>

    
    )}

export default ItemList;