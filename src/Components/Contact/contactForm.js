import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Wrapper = styled('div')`
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  -webkit-appearance: none;
  width: 100%;
  padding: 0 10px;
`;

const ContactLabel = styled('label')`
  font-family: 'Cormorant Garamond', serif;
`;
const ContactInput = styled('input')`
  font-family: 'Cormorant Garamond', serif;
  border: 1px solid black;
  padding: 9px;
  margin-top: 5px;
  margin-bottom: 10px;
  -webkit-appearance: none;

  &:focus-visible, &:focus {
    border: 1px solid black;
  }
`;

const Button = styled('button')`
  font-family: 'Cormorant Garamond', serif;    
  background: none;
  border-radius: 0;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid black;
  background: black;
  color: white;
  -webkit-appearance: none;
`;

const ResponseText = styled('p')`
  font-family: 'Cormorant Garamond', serif;    
  font-size: 10px;
  &.success {

  }
  &.error {
    color: red;
  }
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
        {
          result && result.success === 'success' ? 
            (
            <ResponseText className="error">
              {result.message}
            </ResponseText>
            ) : 
            (<Button variant="primary" type="submit">
              Submit
            </Button>)
        }
      </Form>
      {(result && result.success === 'error') ?
        <ResponseText className="error">
          {result.message}
        </ResponseText>
      : null}
    </Wrapper>
  );
};

export default ContactForm;