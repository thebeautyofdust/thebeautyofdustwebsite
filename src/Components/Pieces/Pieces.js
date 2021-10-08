import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import PiecesGrid from '../FilteredGrid/pieces';
import mixpanel from 'mixpanel-browser';

const BodyContainer = styled('div')`
  padding-top: 50px;
  width: 100vw;
`

function Pieces() {
  mixpanel.init('55bc83f2f66404f4e75e43ca1cecaf6f', {debug: true}); 
  mixpanel.track('View Pieces')
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header activePage="pieces"/>
      <BodyContainer>
          <PiecesGrid />
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Pieces;