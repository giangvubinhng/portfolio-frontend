import React, {useState, useContext} from 'react';
import './Admin.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function Admin() {
	const [inputVal, setInputVal] = useState({
		title: '',
		info: '',
		resume: ''
	});
	const [resultMessage, setResultMessage] = useState('');
	const editPost = event => {
		event.preventDefault();
		axios.put(`${process.env.REACT_APP_API}/api/bio`, {...inputVal}, {withCredentials: true})
		.then(response => 
			{
				setResultMessage(response.message);
			})
			.catch(error => 
			{
				setResultMessage(error.message);
			});
	};


	const onInputChange = event => {
		const {name, value} = event.target;
		setInputVal({
			...inputVal,
			[name]: value
		});

	};
	return (
		<div className="col-md-6 offset-md-3">
			<h1>Welcome to admin page!</h1>
			<form onSubmit={editPost}>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="title" value={inputVal.title} placeholder="Please Enter your full name" onChange={onInputChange} />
				</Form.Group>
				<Form.Group controlId="info">
					<Form.Label>Bio</Form.Label>
					<Form.Control
						as="textarea"
						name="info"
						value={inputVal.info}
						rows="3"
						placeholder="Enter your Bio"
						onChange={onInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="resume">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="resume" value={inputVal.resume} placeholder="Link to resume" onChange={onInputChange} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Save
				</Button>
			</form>
		</div>


	);
}
export default Admin;
