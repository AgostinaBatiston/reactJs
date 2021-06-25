import React, {useEffect, useState} from 'react';
import './_ItemDetailContainer.scss';
import ProductDetail from '../../views/ProductDetail/ProductDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect( () => {
        setTimeout( () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then (res => res.json())
            .then (res => setItem(res))
        }, 2000);
    }, [id])

    return (
        <div>
            <div key={item.id}>
                <ProductDetail  prop={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;