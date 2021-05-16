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
`;

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
      <GlobalStyles />
      <Wrapper>
        <ContactText>
          If you want to know more or would like to collaborate, please send an email to <a href="mailto:thebeautyofdust@gmail.com">thebeautyofdust@gmail.com</a>.
        </ContactText>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;