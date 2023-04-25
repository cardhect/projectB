import React from 'react';
import logo from '../Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Link as LinkToComp } from 'react-router-dom';


function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<div className='home-logo navbar-title navbar-item'>

			<LinkToComp to='/'>
			<img className='home-logo' src={logo} alt='burrito la chiquita logo'/>
			</LinkToComp>
			</div>

			<nav className='nav-section' ref={navRef}>
				<a className='navbar-item' href="#/">
					<LinkToComp hrefLang='' to='/menu' onClick={showNavbar}>Menu</LinkToComp>
				</a>
				<a className='navbar-item' href="#/">
					<LinkToComp to='/gallery'>Gallery</LinkToComp>
				</a>
				<a className='navbar-item' href="#/">
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						About Us
					</Link>
				</a>
				<a className='navbar-item' href="#/">
					<Link
						activeClass='active'
						to='location'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						Location
					</Link>
				</a>

				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
