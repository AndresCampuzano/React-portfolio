import React, { Component } from 'react';
import './styles/Footer.css';
import FacebookIcon from '../components/static/icons/icons8-facebook.svg';
import GitHubIcon from '../components/static/icons/icons8-github.svg';
import InstagramIcon from '../components/static/icons/icons8-instagram.svg';
import TwitterIcon from '../components/static/icons/icons8-twitter.svg';

class Footer extends Component {
	render() {
		return (
			<div>
				<section className='contact'>
					<div className='contact--title'>
						<h2>Let's create something together!</h2>
					</div>
					<div className='contact--input'>
						<input type='text' placeholder='Your mail here' />
					</div>
					<div className='contact--button'>
						<input type='button' defaultValue='Send' />
					</div>
					<div className='contact--social'>
						<img
							src={InstagramIcon}
							alt='Instagram icon'
							width='3.8%'
						/>
						<img
							src={FacebookIcon}
							alt='Facebook icon'
							width='4.5%'
						/>
						<img
							src={TwitterIcon}
							alt='Twitter icon'
							width='20px'
						/>
						<img src={GitHubIcon} alt='GitHun icon' width='4.5%' />
					</div>
				</section>
				<footer>
					<div className='footer--legal'>
						<p>
							Andrés Campuzano, All rights reserved. Web made
							using React ⚛
						</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
