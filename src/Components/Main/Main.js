import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import sheSaid from '../../images/she-said.jpg';

const BodyContainer = styled('div')`
  padding-top: 50px;
  width: 100vw;
  height: 100%;
`

const TopContainer = styled.div`
  width: 100vw;
  height: 100%;
  margin: 20px;
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
    <>
      <GlobalStyles />
      <Header/>
      <BodyContainer>
          <TopContainer>
              <TempImage />
          </TopContainer>
      </BodyContainer>
    </>
  </ThemeProvider>
  );
}
export default Main;