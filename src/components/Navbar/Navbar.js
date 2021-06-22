import React from 'react'
import './Navbar.css';

import CartWidget from '../CartWidget/CartWidget';
import { Images } from "../../utils/images.js";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
      <nav className="Navbar">
        <Link to="/" className="logo">
        <img src={Images.Logo} alt="logo" />
        </Link>
          
       <ul>
       
          <li>
              <Link to="/" className="Link">
                Home
              </Link>
              <Link to="/about" className="Link">
                About
              </Link>
      
              <Link className="Link">
              <CartWidget />
              </Link>

          </li>
          
    
        
              
                
             
            
          </ul>
        
      </nav>
    );
  };
  
  export default Navbar;
  
