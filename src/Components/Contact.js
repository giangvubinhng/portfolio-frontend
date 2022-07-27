import React, { useState } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import * as config from "./../config.json"

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);


  const sendEmail = event => {
    event.preventDefault();

    axios
     .post(`${config.api}/send`, { ...state })
     .then(response => {
       setResult(response.data);
       setState({ name: '', email: '', subject: '', message: '' });
     })
     .catch(() => {
       setResult({ success: false, message: 'Something went wrong. Please try again'});
   });
  };
  const onInputChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    }); 

  };

  return (
    <div className="container contact-cont">
      <div className="col-md-6 offset-md-3">
        
        <h2>Contact <i className="fas fa-envelope-open-text"></i></h2>
        <p className="information">If you have any question or would like to contact me for work, please send me an email by filling out this form. I would love to hear from you!</p>
        {result && (
          <p className={`$result.success ? 'success' : 'error'`}>{result.message}</p>
        )}
        


        <form onSubmit={sendEmail}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={state.name} placeholder="Please Enter your full name" onChange={onInputChange}/>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={state.subject}
              placeholder="Enter subject"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={state.message}
              rows="3"
              placeholder="Enter your message"
              onChange={onInputChange}
            />
          </Form.Group>
          <Button disabled={
        state.name === "" || state.email === "" || state.subject === "" || state.message === "" ? true : false
    } variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );

};


export default Contact;
