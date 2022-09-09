import React, { useState } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const contact = '<Contact/>'
  const initialInput = {
    name: '',
    email: '',
    message: ''
  }
  const [input, setInput] = useState(initialInput);

  const onInputChange = event => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });

  };

  return (
    <div className="contact-cont">
      <div className="col-lg-6 ">
        <h1 className="contact-title">{contact} <i className="fas fa-envelope-open-text"></i></h1>

        <p className="information">If you have any question or would like to contact me for work, please send me an email by filling out this form. I would love to hear from you!</p>

        <form action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL_API_KEY}`} method="POST">
          <Form.Group controlId="name">
            <Form.Label className='input-label'>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={input.name} placeholder="Your name" onChange={onInputChange} className="input" required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className='input-label'>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={input.email}
              placeholder="Your email"
              onChange={onInputChange}
              className="input"
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label className='input-label'>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={input.message}
              rows="3"
              placeholder="Your message"
              onChange={onInputChange}
              className="input"
              required
            />
          </Form.Group>
          <button type="submit" className="button-53">
            Send
          </button>
        </form>
        <p className="sponsor">This form is powered by <a href="https://formsubmit.co/" rel="noreferrer" target="_blank">formsubmit.co</a></p>
      </div>
    </div>
  );

};


export default Contact;
