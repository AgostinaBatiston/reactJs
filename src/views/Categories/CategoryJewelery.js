import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import './Categories.css';


function CategoryJewelery() {
    const [jeweleries, setJeweleries] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then(response => response.json())
      .then(response => setJeweleries(response))
    }, [])

    return (
        <div className="item-categoria">
            <h2>Joyas</h2>
            {jeweleries.map ( jewe =>
                <div className="prop" style={{ margin: 20}}>
                    <img src={`${jewe.image}`} alt="Imágen Producto"></img>
                    <h4 key={jewe.id} className="item-p">{jewe.title}</h4>
                    <h2>${jewe.price}</h2>
                    <ItemCount />
                    
                </div>
                )
            }
        </div>
    )
}

export default CategoryJewelery;