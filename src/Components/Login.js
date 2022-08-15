import React from 'react';
import './Login.css';
import {useState} from 'react';
import userService from '../Services/user.service';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
	const [inputVal, setInputVal] = useState({
		email: '',
		password: '',
		rememberMe: false
	});

	const [error, setError] = useState('');

  const navigate = useNavigate();


	const onInputChange = (e) => {
		const {name, value} = e.target;
		setInputVal({
			...inputVal,
			[name]: value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const loginInfo = {
			email: inputVal.email,
			password: inputVal.password,
		}

		const result = await userService.authenticate(loginInfo);
		if (result.status === 200) {
      navigate('/', {replace: true});
		}
		else {
			setError(result.message)
		}

	};

	return (
		<div className="login-container">
			<div className="inner">
				<form onSubmit={onSubmit}>
					<h3>Log in</h3>
					{error !== '' || error !== undefined ? (<p className="errorMessage">{error}</p>) : null}
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={inputVal.email}
							onChange={onInputChange}
							className="form-control transparent-input"
							placeholder="Enter email"
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={inputVal.password}
							onChange={onInputChange}
							className="form-control transparent-input"
							placeholder="Enter password"
						/>
					</div>
					<span>
						<button type="submit" className="submit-btn btn btn-dark btn-lg btn-block">
							Sign in
						</button>
            <div className="fgt-password">
						  <Link to="/" >Forgot password</Link>
           </div>

					</span>
					<p>Not a member? <Link to="/register">Register</Link></p>
				</form>
			</div>
		</div >
	);
};

export default Login;
