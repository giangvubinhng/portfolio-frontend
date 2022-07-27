import React, {useState, useContext} from 'react';
import './Admin.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {myBody} from '../FrontPage';
import * as config from './../config.json'

function Admin() {
	const body = useContext(myBody);
	const [state, setState] = useState({
		title: '',
		info: '',
		resume: ''
	});
	const editPost = event => {
		event.preventDefault();
		axios.post(`${config.api}/edit`, {...state}).then(response => {console.log(response);}).catch(error => {console.log(error);});
		window.location.href = "/";
	};


	const onInputChange = event => {
		const {name, value} = event.target;
		setState({
			...state,
			[name]: value
		});

	};
	return (
		<div className="col-md-6 offset-md-3">
			<h1>Welcome to admin page!</h1>
			<form onSubmit={editPost}>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="title" value={state.title} placeholder="Please Enter your full name" onChange={onInputChange} />
				</Form.Group>
				<Form.Group controlId="info">
					<Form.Label>Bio</Form.Label>
					<Form.Control
						as="textarea"
						name="info"
						value={state.info}
						rows="3"
						placeholder="Enter your Bio"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="resume">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="resume" value={state.resume} placeholder="Link to resume" onChange={onInputChange} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Save
				</Button>
			</form>
		</div>


	);
}
export default Admin;
