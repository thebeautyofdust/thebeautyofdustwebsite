import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import ContactFrom from './contactForm';

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  margin: auto;
`;

const ContactText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 1px;
  text-align: center;
  font-weight: bold;
`;
const ContactSubText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 1px;
  text-align: center;
  max-width: 350px;
  font-weight: 200;
`;


const Padding = styled('div')`
  padding-top: 10px;
`;

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
      <GlobalStyles />
      <Wrapper>
        <ContactText>
          <ContactText><i>we continue to add new content</i></ContactText>
          <ContactText><i>and opportunities to collaborate with artists</i></ContactText>
          <Padding />
          <Padding />
          <ContactSubText>send us a message to:</ContactSubText>
          <ContactSubText>join our mailing list | explore collaborating with us</ContactSubText>
          <ContactSubText>[ i.e. poetry submission, videography, editing, other...]</ContactSubText> 
          <Padding />
          <Padding />
          <Padding />
          <Padding />
        </ContactText>
        <ContactFrom />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;