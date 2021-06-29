import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'
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
                    <Link to= {`/detail/${homb.id}` }>
                        <Card>
                            <Image src = { `${homb.image}` } wrapped ui = { false }/> 
                            <Card.Content>
                            <Card.Header key={homb.id}> 
                                <h4>
                                { homb.title } 
                                </h4>
                            </Card.Header>

                            <Card.Description > 
                                <h2>
                                ${homb.price }
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

export default CategoryMen;