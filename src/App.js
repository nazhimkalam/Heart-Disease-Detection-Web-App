import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HeartDiseasePredTitle from './components/HeartDiseasePredTitle/HeartDiseasePredTitle';
import MainTitle from './components/MainTitle/MainTitle';
import PredictionSection from './components/PredictionSection/PredictionSection';

function App() {
	return (
		<div className="app">
			<MainTitle />
			<About />
			<HeartDiseasePredTitle />
			<PredictionSection />
			<Footer />
		</div>
	);
}

export default App;
