import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import PiecesGrid from '../FilteredGrid/pieces';

const BodyContainer = styled('div')`
  padding-top: 50px;
  width: 100vw;
`

function Pieces() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <BodyContainer>
          <PiecesGrid />
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Pieces;