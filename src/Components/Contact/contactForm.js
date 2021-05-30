import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Wrapper = styled('div')`
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled('label')`
  font-family: 'Cormorant Garamond', serif;
`;
const ContactInput = styled('input')`
  font-family: 'Cormorant Garamond', serif;
`;

const Button = styled('button')`
  font-family: 'Cormorant Garamond', serif;
`;


const ContactForm = () => {
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
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
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
    <Wrapper>
       {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <Form onSubmit={sendEmail}>
          <ContactLabel>Full Name</ContactLabel>
          <ContactInput
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
          <ContactLabel>Email</ContactLabel>
          <ContactInput
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
          <ContactLabel>Subject</ContactLabel>
          <ContactInput
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
          <ContactLabel>Message</ContactLabel>
          <ContactInput
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;