import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
        <GlobalStyles />
        Contact
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;