import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import ContactFrom from './contactForm';

const Wrapper = styled('div')`
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
  font-size: 35px;
`;
const ContactSubText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 1px;
  text-align: center;
  font-weight: 200;
`;


const Padding = styled('div')`
  padding-top: 10px;
`;

const TextWrapper = styled('div')`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  padding-top: 20px;
  max-width: 600px;
`;

const ContactSubTextWrapper = styled('div')`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;
`;

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
      <GlobalStyles />
      <ContentWrapper>
      <TextWrapper>
        <ContactText>find out about new content and opportunities to collaborate</ContactText>
      </TextWrapper>
      <ContactSubTextWrapper>
        <ContactSubText>send us a message to: join our mailing list | explore collaborating with us [i.e. poetry submission, videography, editing, other...]</ContactSubText> 
      </ContactSubTextWrapper>
      <Wrapper>
        <ContactFrom />
      </Wrapper>
      </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;