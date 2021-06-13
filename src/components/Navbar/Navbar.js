import React, { Component } from 'react'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

export default class Navbar extends Component {
    render() {
        return (
            
            <nav class="ui pointing menu">    
        
                    <a class="item" className='BtnInicio' href="#">
                        <h2>
                        Inicio
                        </h2>  
                    </a>
                    <a class="item">Quienes somos</a>
                    <a class="item">
                        Tienda
                    </a>
                    
                    <CartWidget/>


            </nav>
        )
    }
}
