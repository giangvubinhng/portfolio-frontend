import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {Routes, Route } from 'react-router-dom';

function App() {
	return (
			<div className="App">
				<Nav />
				<Routes>
					<Route path='/' exact element={<Home />} />
				</Routes>
			</div>
	);
	}

export default App;
