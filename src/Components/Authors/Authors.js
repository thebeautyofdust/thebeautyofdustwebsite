import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Author from './Author';

import authors from '../../authors.json';


const BodyContainer = styled('div')`
  width: 100vw;
  display: flex;   
  flex-wrap: wrap;
  padding: 0.5vw;
  padding-top: 50px;
  justify-content: center;
`

function Authors() {
  console.log('authors', authors)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header activePage="authors"/>
      <BodyContainer>
        {authors && authors.map(author => <Author {...author}/>)}
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Authors;