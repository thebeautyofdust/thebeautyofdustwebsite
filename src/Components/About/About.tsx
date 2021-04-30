import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';

function About() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      About page
    </>
  </ThemeProvider>
  );
}
export default About;