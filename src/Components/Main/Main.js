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
`

const TopContainer = styled('div')`
  margin: 0 20px;
  height: 100%;
`;

const TextStripContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  padding: 130px 0px;
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
          <TextStripContainer>
            We believe dust is beautiful!
          </TextStripContainer>
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Main;