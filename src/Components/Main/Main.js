import React from 'react';
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
    width: 110px;
    height: auto;
    object-fit: contain;
    

    @media ${devices.mobileL} { 
        width: 90px;
    }
    @media ${devices.tablet} { 
      width: 140px;
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
  padding: 130px 0px 160px

`;

const LogoTitle = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 27px; 

  @media ${devices.mobileL} { 
    font-size: 27px; 
  }
  @media ${devices.tablet} { 
      font-size: 42px; 
  }
`;

const LogoSubText = styled('div')`
  font-size: 12px;
  @media ${devices.mobileL} { 
    font-size: 15px; 
  }
  @media ${devices.tablet} { 
      font-size: 19px; 
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

  formatForGrid = (items) => {
    return items.map(item => ({
        id: item.id,
        title: item.title,
        shortText: item.shortText,
        url: item.url,
        imageSrc: item.imageSrc
      })
    );
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
            <TextStripContainer>
              <LogoImage src={logo} />
              <LogoTitle>
                the beauty of dust
                <LogoSubText>everyday imaginiation</LogoSubText>
              </LogoTitle>
            </TextStripContainer>
            {items && items.length && <TopGrid items={this.formatForGrid(items)} />}
        </BodyContainer>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Main;
