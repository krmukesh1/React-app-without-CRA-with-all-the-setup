import React from 'react';

import Header from './components/Header';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import GitCommit from './pages/GitCommit';
const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/git-commit-standards" element={<GitCommit />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
};

export default App;
