import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Filters from '../FilteredGrid/pieces';

const BodyContainer = styled('div')`
  padding-top: 50px;
  width: 100vw;
  height: 100%;
`

function Pieces() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <BodyContainer>
          <Filters />
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Pieces;