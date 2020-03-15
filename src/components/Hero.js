import React, { Component } from 'react';
import './styles/Hero.css';
import ComputerPicture from '../components/static/images/computer.svg';

class Hero extends Component {
	render() {
		return (
			<section className='hero'>
				<div className='hero--image'>
					<img
						src={ComputerPicture}
						alt='Hero image portfolio computer laptop'
					/>
				</div>
				<div className='hero--title'>
					<h1>
						HI! I'M <a>ANDRÉS CAMPUZANO</a>,
						<br />
						FRONT-END DEVELOPER👩‍💻
					</h1>
				</div>
			</section>
		);
	}
}

export default Hero;
