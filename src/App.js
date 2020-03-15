import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import CardsSection from './components/CardsSection';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<Experience />
			<CardsSection>
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</CardsSection>
			<Footer />
		</div>
	);
}

export default App;
