import React from 'react'
import './Navbar.css';



import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
      <nav className="Navbar">
        
          
       <ul>
       
          <li>
              
              <Link to="/category/manga" className="Link-navbar">
                Mangas
              </Link>


              <Link to="/category/comic" className="Link-navbar">
               Comics
              </Link>

              <Link to="/category/libro" className="Link-navbar">
              Libros
              </Link>
                  
               

          </li>
          
    
        
              
                
             
            
          </ul>
        
      </nav>
    );
  };
  
  export default Navbar;
  
