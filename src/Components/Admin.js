import React, {useEffect, useState, useCallback} from 'react';
import './Admin.css';
import {Form, Button} from 'react-bootstrap';
import bioService from '../Services/bio.service';

function Admin() {
	const [inputVal, setInputVal] = useState({
		title: '',
		info: '',
		resumeLink: ''
	});
	const [resultMessage, setResultMessage] = useState('');


	const fetchedBio = useCallback(async () => {
		const data = await bioService.getBio();
		if (data.result?.length > 0) {
			const bio = data.result[0];
			setInputVal({
				title: bio.title ? bio.title : inputVal.title,
				info: bio.info ? bio.info : inputVal.info,
				resumeLink: bio.resumeLink ? bio.resumeLink : inputVal.resumeLink,
			})
		}
	}, []);

	useEffect(() => {
		fetchedBio()
	}, [])

	const onInputChange = event => {
		const {name, value} = event.target;
		setInputVal({
			...inputVal,
			[name]: value
		});

	};

	const editPost = event => {
		event.preventDefault();
		bioService.editBio(inputVal)
		.then(response => 
			{
				setResultMessage(response.data.message);
			})
			.catch(error => 
			{
				setResultMessage(error.response.data.message);
			});
	};
	return (
		<div className="admin-container">

		<div className="col-md-6">
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
					<Form.Control type="text" name="resumeLink" value={inputVal.resumeLink} placeholder="Link to resume" onChange={onInputChange} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Save
				</Button>
			</form>
			<p>
			{resultMessage}
			</p>
		</div>
		</div>


	);
}
export default Admin;
