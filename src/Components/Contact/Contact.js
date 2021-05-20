import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContactText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 1px;
`;

const Email = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding-top: 20px;
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
          <Padding />
          <ContactText>send us an email to</ContactText>
          <ContactText>join our mailing list</ContactText>
          <ContactText>submit your piece</ContactText> 
          <ContactText>collaborate with us</ContactText>
          <Email><a href="mailto:thebeautyofdust@gmail.com">thebeautyofdust@gmail.com</a></Email>
        </ContactText>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;