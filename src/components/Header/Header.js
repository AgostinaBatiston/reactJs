import React from 'react';
import './Header.css';
import { Images } from "../../utils/images.js";
import { Link } from "react-router-dom";


function Header() {
	return (
		<div className='Header'>
			
			<Link to="/" className="logo">
                <img src={Images.Logo} alt="logo" className="logoImg"/>
				
            </Link>
			<h1 className='titleInicio'>Libreria uzumaki</h1>
		</div>
	);
}

export default Header;