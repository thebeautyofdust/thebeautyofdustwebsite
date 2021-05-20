import styled, { createGlobalStyle } from 'styled-components';
import arrow from '../images/arrow.png';
import arrowwhite from '../images/arrow-white.png';
import chevron from '../images/chevron.png';
import chevronwhite from '../images/chevronwhite.png';

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
`;

export const ContentWrapper = styled('div')`
  min-height: calc(100vh - 50px - 100px);
`;  

export const Arrow = styled('div')`
  background-image: url(${({ color }) => color === 'white' ? arrowwhite : arrow });
  width: 20px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;

  &.up {
    transform: rotate(270deg);
    width: 32px;
    height: 20px;
  }

  &.down {
    transform: rotate(90deg);
    width: 32px;
    height: 20px;
  }
`;  

export const Chevron = styled('div')`
background-image: url(${({ color }) => color === 'white' ? chevronwhite : chevron });
  width: 26px;
  height: 53px;
  background-size: contain;
  background-repeat: no-repeat;

  &.left {
    transform: rotate(180deg);
  }
`;  