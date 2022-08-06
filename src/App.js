import React, {useContext, useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Admin from './Components/Admin';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Blogs from './Components/Blogs'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {appContext} from './Context';
import userService from './Services/user.service';
import Register from './Components/Register';

function App() {
	const {user} = useContext(appContext);
	const [uObject, setUObject] = useState(user[0]);
	const logOut = async () => {
		const result = await userService.logOut();
		if(result.success){
			window.href = '/';
		}

	}
	useEffect(() => {
		setUObject(user[0]);
	}, [user[0]]);

	return (
		<Router>
			<div className="App">
				<Nav />
				{uObject.isLoggedIn ? (
					<div className="floatingBtnContainer">
						<button className="btn btn-dark manageBtn" type="button" onClick={logOut}>Logout</button>
					</div>
				) : null}
				<Routes>
					<Route path="/resume" element={<Resume />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/admin" element={
						uObject.isLoggedIn ? (<Admin />) : (<Login />)
					} />
					<Route path='/' exact element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
	}

export default App;
