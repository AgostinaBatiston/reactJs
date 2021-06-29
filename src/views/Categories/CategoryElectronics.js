import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import './Categories.css';



function CategoryElectronics() {
    const [electronics, setElectronics] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then(response => response.json())
      .then(response => setElectronics(response))
    }, [])

    return (
        <div className="item-categoria">
            <h2>Electrónicos</h2>
            {electronics.map ( elec =>
                <div className="prop" style={{ margin: 20}}>
                    <img src={`${elec.image}`} alt="Imágen Producto" className="img-categoria"></img>
                    <h4 key={elec.id} className="item-p">{elec.title} </h4>
                    <h2>${elec.price}</h2>
                    <ItemCount />
                   
                </div>
                )
            }
        </div>
    )
}

export default CategoryElectronics;