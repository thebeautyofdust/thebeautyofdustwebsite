import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    padding-top: 50px;
    background: #FAFAFA;
    text-rendering: optimizeLegibility;
  }
  `

export const ContentWrapper = styled('div')`
  min-height: calc(100vh - 50px - 100px);
`;  