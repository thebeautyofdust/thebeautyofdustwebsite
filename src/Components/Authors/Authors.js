import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import AuthorsGrid from '../FilteredGrid/authors';

const BodyContainer = styled('div')`
  padding-top: 50px;
  width: 100vw;
  height: 100%;
`

function Authors() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <BodyContainer>
          <AuthorsGrid />
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Authors;