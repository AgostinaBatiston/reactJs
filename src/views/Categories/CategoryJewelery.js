import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
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
                    <Link to = { `/detail/${jewe.id}` } >
                    <Card>
                        <Image src = { `${jewe.image}` } wrapped ui = { false }/> 
                        <Card.Content>
                            <Card.Header key={jewe.id}> 
                                <h4>
                                {jewe.title } 
                                </h4>
                            </Card.Header>

                            <Card.Description > 
                                <h2>
                                ${jewe.price }
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

export default CategoryJewelery;