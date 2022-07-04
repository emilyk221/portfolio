import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formState;
  const [error, setError] = useState("");

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      // isValid conditional statement
      if (!isValid) {
        setError('Your email is invalid.');
      }
      else {
        setError("");
      }
    }
    else {
      if (!event.target.value.length) {
        setError(`${event.target.name} is required.`);
      }
      else {
        setError("");
      }
    }

    if (!error) {
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }
  return (
    <section className="contact section">
      <h2>Contact</h2>
      <p className='contact-info'>
        Email: emily.g.kruse@gmail.com <br />
        <a href="https://github.com/emilyk221">GitHub</a><br />
        <a href="https://www.linkedin.com/in/emily-g-kruse/">LinkedIn</a>
      </p>
      {/* <Form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control as="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </Form.Group>
        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}
        <Button className="button" type="submit">Submit</Button>
      </Form> */}
    </section>
  );
}

export default Contact;
