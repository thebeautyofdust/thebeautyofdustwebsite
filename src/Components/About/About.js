import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AboutText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
`;

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="about" />
        <GlobalStyles />
        <Wrapper>
          <AboutText>
            We are the beauty of dust
          </AboutText>
        </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default About;