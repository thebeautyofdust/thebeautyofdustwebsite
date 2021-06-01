import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import logo from '../../images/logo_big2.png';
import PieceBook from '../PieceBook/piecebook';
import { devices } from '../../Common/devices';
import TopGrid from './topgrid';
import topItems from './top.json';

const LogoImage = styled('img')`
    width: 70px;
    height: auto;
    object-fit: contain;
    overflow: initial;

    @media ${devices.mobileL} { 
        width: 70px;
    }
    @media ${devices.tablet} { 
      width: 98px;
      margin-right: 10px;
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
  padding: 30px 0px;
  align-items: center;    
  padding: 130px 0px 160px;
  padding-top: 20px;
`;

const BottomTextStripContainer = styled(TextStripContainer)`
    flex-direction: column;
    padding: 130px 0px 160px;
`;

const LogoTitle = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 20px; 

  @media ${devices.mobileL} { 
    font-size: 20px; 
  }
  @media ${devices.tablet} { 
      font-size: 27px; 
  }
`;

const LogoSubText = styled('div')`
  font-size: 10px;
  @media ${devices.mobileL} { 
    font-size: 12px; 
  }
  @media ${devices.tablet} { 
      font-size: 15px; 
  }
`;

const For = styled('div')`
  margin: 0 20px;
  height: auto;
`;

const SandsText = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 27px; 
  padding: 15px;
  text-align: center;
  
  @media ${devices.tablet} { 
      font-size: 35px; 
  }
`;

const StyledLink = styled(Link)`
border: 1px solid black;
text-decoration: none;
color: black;
padding: 10px 20px;
`;


const StyledBlurbContainer = styled('div')`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

const StyledBlurb = styled('div')`
font-family: 'Cormorant Garamond', serif;
max-width: 90vw;
padding: 40px;
font-size: 35px;
margin-top: 70px;
font-style: italic;

@media ${devices.tablet} { 
    font-size: 55px;     
    padding: 15px;
}
`;


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: topItems,
        filterBy: "",
    }
  }

  render() {  
    const { items } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <BodyContainer>
            <TopContainer>
                <PieceBook />
            </TopContainer>
            <StyledBlurbContainer>
              <StyledBlurb>Gathering the voices of artists, who see and shape the hidden aspects of life.
              They awaken our own imaginations. They help us create something beautiful with what we have and out of who we are.
              </StyledBlurb>
            </StyledBlurbContainer>
            <TextStripContainer>
              <LogoImage src={logo} />
              <LogoTitle>
                the beauty of dust
                <LogoSubText>everyday imagination</LogoSubText>
              </LogoTitle>
            </TextStripContainer>
            {items && items.length && <TopGrid items={items} />}
            <BottomTextStripContainer>
              <For>for</For>
              <SandsText>
                Submissions & Subscriptions
              </SandsText>
              <StyledLink to="contact">click here</StyledLink>
            </BottomTextStripContainer>
        </BodyContainer>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Main;
