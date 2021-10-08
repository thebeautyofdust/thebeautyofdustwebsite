import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Author from './Author';

import authors from '../../authors.json';
import mixpanel from 'mixpanel-browser';


const BodyContainer = styled('div')`
  width: 100vw;
  display: flex;   
  flex-wrap: wrap;
  padding: 0.5vw;
  padding-top: 50px;
`

function Authors() {
  mixpanel.init('55bc83f2f66404f4e75e43ca1cecaf6f', {debug: true}); 
  mixpanel.track(`View Authors`);
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