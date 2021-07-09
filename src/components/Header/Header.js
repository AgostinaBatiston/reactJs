import React ,{Component} from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import { Images } from "../../utils/images.js";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'


class Header extends Component {
	state = { activeItem: 'home' }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state


		return (
			<div className="Header">

				<Menu pointing secondary>
				<Link to="/" className="logo">
					<Menu.Item
						onClick={this.handleItemClick}
					/>
						<img src={Images.Logo} alt="logo" className="logoImg"/>
				</Link>

				
			
				<Menu.Menu position='right'>
					<Link className="Link-Cart">
					<Menu.Item
					onClick={this.handleItemClick}
					/>
					 <CartWidget />
					 </Link>
				</Menu.Menu>
				</Menu>
				
				
				
			</div>
		);
	}
}

export default Header;

