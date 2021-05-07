import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';



function About() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <GlobalStyles />
        <ContentWrapper>
          About page
        </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default About;