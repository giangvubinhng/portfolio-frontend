import React, {useState} from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import emailService from '../Services/email.service';

const Contact = () => {
	const contact = '<Contact/>'
	const [state, setState] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [result, setResult] = useState(null);


	const sendEmail = event => {
		event.preventDefault();
		emailService.sendContactMeEmail(state)
			.then(response => {
				setResult(response.data);
				setState({name: '', email: '', subject: '', message: ''});
			})
			.catch(() => {
				setResult({success: false, message: 'Something went wrong. Please try again'});
			});
	};
	const onInputChange = event => {
		const {name, value} = event.target;
		setState({
			...state,
			[name]: value
		});

	};

	return (
		<div className="contact-cont">
			<div className="col-lg-6 ">
				<h1 className="contact-title">{contact} <i className="fas fa-envelope-open-text"></i></h1>

				<p className="information">If you have any question or would like to contact me for work, please send me an email by filling out this form. I would love to hear from you!</p>
				{result && (
					<p className={`${result.success} ? 'success' : 'error'`}>{result.message}</p>
				)}



				<form onSubmit={sendEmail}>
					<Form.Group controlId="name">
						<Form.Label className='input-label'>Full Name</Form.Label>
						<Form.Control type="text" name="name" value={state.name} placeholder="Your name" onChange={onInputChange} className="input" />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label className='input-label'>Email</Form.Label>
						<Form.Control
							type="text"
							name="email"
							value={state.email}
							placeholder="Your email"
							onChange={onInputChange}
							className="input"
						/>
					</Form.Group>
					<Form.Group controlId="subject">
						<Form.Label className='input-label'>Subject</Form.Label>
						<Form.Control
							type="text"
							name="subject"
							value={state.subject}
							placeholder="The email title"
							className="input"
							onChange={onInputChange}

						/>
					</Form.Group>
					<Form.Group controlId="subject">
						<Form.Label className='input-label'>Message</Form.Label>
						<Form.Control
							as="textarea"
							name="message"
							value={state.message}
							rows="3"
							placeholder="Your message"
							onChange={onInputChange}
							className="input"
						/>
					</Form.Group>
					<button disabled={
						state.name === "" || state.email === "" || state.subject === "" || state.message === "" ? true : false
					} variant="primary" type="submit" className="button-53">
						Send
					</button>
				</form>
			</div>
		</div>
	);

};


export default Contact;
