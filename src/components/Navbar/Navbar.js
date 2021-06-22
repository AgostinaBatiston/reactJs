import React from 'react'
import './Navbar.css';

import CartWidget from '../CartWidget/CartWidget';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
      <nav className="Navbar">
        
          
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
  
