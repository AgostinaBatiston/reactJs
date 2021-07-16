import React from 'react'
import './Navbar.css';



import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
      <nav className="Navbar">
        
          
       <ul>
       
          <li>
              <Link to="/category/Mangas" className="Link-navbar">
                Mangas
              </Link>


              <Link to="/category/Comics" className="Link-navbar">
               Comics
              </Link>

              <Link to="/category/Libros" className="Link-navbar">
              Libros
              </Link>
                  
               

          </li>
          
    
        
              
                
             
            
          </ul>
        
      </nav>
    );
  };
  
  export default Navbar;
  
