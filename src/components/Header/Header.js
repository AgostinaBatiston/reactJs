import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            
            <nav class="ui pointing menu">    
        
                    <a class="item" className='BtnInicio' href="#">
                        <h2>
                        Libreria Uzumaki
                        </h2>  
                    </a>
                    <a class="item">Quienes somos</a>
                    <a class="item">
                        Tienda
                    </a>
                    


            </nav>
        )
    }
}
