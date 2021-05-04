import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <GlobalStyles />
        About page
      <Footer />
    </ThemeProvider>
  );
}
export default About;