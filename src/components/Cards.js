import React, { Component } from 'react';
import './styles/Cards.css';
import EmailPicture from '../components/static/images/email-marketing.jpg';

class Cards extends Component {
	render() {
		return (
			<div className='cards--card'>
				<img src={EmailPicture} alt='Email marketing picture' />
				<div className='cards--card-small'>
					<h3>Front-End Design</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam vitae nulla, maiores dolores odio nobis,
						excepturi quis modi error veniam sequi fugit nostrum
						totam voluptatum. Porro voluptate in voluptatibus
						doloribus!
					</p>
					<input type='button' defaultValue='See more' />
				</div>
			</div>
		);
	}
}

export default Cards;
