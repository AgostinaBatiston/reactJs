import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import './Categories.css';



function CategoryWomen() {
    const [mujeres, setMujeres] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then(response => response.json())
      .then(response => setMujeres(response))
    }, [])

    return (
        <div className="item-categoria">
            <h2>Ropa (Mujer)</h2>
            {mujeres.map ( muj =>
                <div className="prop" style={{ margin: 20}}>
                    <img src={`${muj.image}`} alt="Imágen Producto"></img>
                    <h4 key={muj.id} className="item-p">{muj.title} </h4>
                    <h2>${muj.price}</h2>
                    <ItemCount />
                   
                </div>
                )
            }
        </div>
    )
}

export default CategoryWomen;