import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
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
                    <Link to= {`/detail/${elec.id}` }>
                    <Card>
                            <Image src = { `${elec.image}` } wrapped ui = { false }/> 
                            <Card.Content>
                            <Card.Header key={elec.id}> 
                                <h4>
                                { elec.title } 
                                </h4>
                            </Card.Header>

                            <Card.Description > 
                                <h2>
                                ${elec.price }
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

export default CategoryElectronics;