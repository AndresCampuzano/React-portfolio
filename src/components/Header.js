import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className='logo'>
					<h2>Portfolio AC</h2>
				</div>
				<div className='nav--info'>
					<ul>
						<li>Experience</li>
						<li>Let's work together</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
