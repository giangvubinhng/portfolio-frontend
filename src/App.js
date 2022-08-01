import React, {useContext} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {appContext} from './Context';

function App() {
	const {user} = useContext(appContext);
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/resume" element={<Resume />} />
					<Route path="/login" element={<Login />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/admin" element={
						user[0].isLoggedIn ? (<Admin />) : (<Login />)
					} />
					<Route path='/' exact element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
