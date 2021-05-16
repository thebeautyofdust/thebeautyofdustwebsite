import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

import ContactForm from './contactForm';

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
      <GlobalStyles />
      <ContentWrapper>
        Contact
        <ContactForm/>
      </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;