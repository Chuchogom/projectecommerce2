import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logoShop.svg';
import menu from '../../assets/icon_menu.svg';
import Menu from '../Menu/Menu';
import MyOrder from '../../containers/MyOrder/MyOrder';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						email@example.com
					</li>
					<li>
						<CartWidget/>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder/>}
		</nav>
	);
}

export default NavBar;