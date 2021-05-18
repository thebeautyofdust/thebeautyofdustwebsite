import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import logo from '../../images/logo_triangle.png';
import PieceBook from '../PieceBook/piecebook';
import { devices } from '../../Common/devices';

const LogoImage = styled('img')`
    width: 180px;
    height: auto;
    object-fit: contain;
    margin-right: 10px;

    @media ${devices.mobileL} { 
        width: 220px;
    }
    @media ${devices.tablet} { 
      width: 280px;
    }
`;

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
  align-items: center;
`;

const LogoTitle = styled('div')`
  display: flex;
  flex-direction: column;

  @media ${devices.mobileL} { 
    font-size: 30px; 
  }
  @media ${devices.tablet} { 
      font-size: 45px; 
  }
`;

const LogoSubText = styled('div')`
  font-size: 10px;
  @media ${devices.mobileL} { 
    font-size: 15px; 
  }
  @media ${devices.tablet} { 
      font-size: 20px; 
  }
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
            <LogoImage src={logo} />
            <LogoTitle>
              the beauty of dust
              <LogoSubText>everyday imaginiation</LogoSubText>
            </LogoTitle>
          </TextStripContainer>
      </BodyContainer>
      <Footer />
  </ThemeProvider>
  );
}
export default Main;