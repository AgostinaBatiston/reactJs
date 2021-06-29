import React from 'react'
import './Navbar.css';


import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
      <nav className="Navbar">
        
          
       <ul>
       
          <li>
              
              <Link to="/categories/electronics" className="Link-navbar">
                Electrónicos
              </Link>


              <Link to="/categories/jewelery" className="Link-navbar">
               Joyas
              </Link>


              <Dropdown text='Ropa' className="Link-navbar">
                <Dropdown.Menu>
                  
  
                  
                <Link to="/categories/women" ><Dropdown.Item  text='Mujer' className="Link-Dropdown"/></Link>
                <Link to="/categories/men"><Dropdown.Item  text='Hombre' className="Link-Dropdown"/></Link>
                  
                </Dropdown.Menu>
              </Dropdown>
      

          </li>
          
    
        
              
                
             
            
          </ul>
        
      </nav>
    );
  };
  
  export default Navbar;
  
