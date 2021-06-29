import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
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
                    <Link to={`/detail/${muj.id}`}>
                    <Card>
                        <Image src = { `${muj.image}` } wrapped ui = { false }/> 
                        <Card.Content>
                            <Card.Header key={muj.id}> 
                                <h4>
                                {muj.title } 
                                </h4>
                            </Card.Header>

                            <Card.Description > 
                                <h2>
                                ${muj.price }
                                </h2> 
                            </Card.Description> 
                        </Card.Content>
                    </Card>
                    </Link>
                   
                </div>
                )
            }
        </div>
    )
}

export default CategoryWomen;