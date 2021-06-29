import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import './Categories.css';


function CategoryMen() {
    const [hombres, setHombres] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then(response => response.json())
      .then(response => setHombres(response))
    }, [])

    return (
        <div className="item-categoria">
            <h2>Ropa (Hombre)</h2>
            {hombres.map ( homb =>
                <div className="prop" style={{ margin: 20}}>
                    <img src={`${homb.image}`} alt="Imágen Producto"></img>
                    <h4 key={homb.id} className="item-p">{homb.title}</h4>
                    <h2>${homb.price}</h2>
                    <ItemCount />
                   
                </div>
                )
            }
        </div>
    )
}

export default CategoryMen;