import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import sheSaid from '../../images/she-said.jpg';
import PieceBook from '../PieceBook/piecebook';

const BodyContainer = styled('div')`
  padding-top: 20px;
  width: 100vw;
  height: 100%;
`

const TopContainer = styled.div`
  margin: 0 20px;
`;

const TempImage = styled.div`
  background-image: url(${sheSaid});
  background-size: cover;
  width: calc(100vw - 40px);
  height: calc(100% - 40px);
  background-repeat: no-repeat;
  background-position: center;
`;

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <BodyContainer>
          <TopContainer>
              <PieceBook />
          </TopContainer>
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Main;