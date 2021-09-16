import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

import youtube from '../../images/youtube.svg';
import website from '../../images/website.svg';
import { devices } from '../../Common/devices';


const Wrapper = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  display: flex;    
  color: #282828;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: cover;
  @media ${devices.mobileL} { 
    width: 100vw;
  }
  @media ${devices.tablet} { 
    width: 43vw;   
    height: 43vw;
  }
  @media ${devices.laptopM} { 
    width: 30vw;   
    height: 30vw;
  }
`

const Border = styled('div')`
  border: 2px solid #282828;
  text-align: center;
  min-width: 320px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const SmallHeading = styled('h4')`
  font-family: 'Cormorant Garamond', serif;
  margin: 0;
  max-width: 295px;
  font-size: 14px;
`;

const Heading = styled('h1')`
  font-family: 'Cormorant Garamond', serif;    
  margin: 0;
  padding-bottom: 10px;
  font-size: 24px;
`;


const Icon = styled('div')`
  background-image: url(${youtube});
  width: 50px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
`; 

const WebsiteIcon = styled(Icon)`
  background-image: url(${website});
  width: 33px;
`;

const StyledLink = styled('a')`
  font-family: 'Cormorant Garamond', serif;    
  cuursor: pointer;
  padding: 0 10px;
`;

const IconWrapper = styled('div')`
  display: flex;    
  flex-direction: row;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;


function Author(props) {

  return (
    <Wrapper>
      <Border>
        <SmallHeading></SmallHeading>
        <Heading>{props.name}</Heading>
        {props.paragraph.map(paragraph => <SmallHeading>{paragraph}</SmallHeading>)}
        <IconWrapper>
          {props.youtube && <StyledLink target="_blank" href={props.youtube}><Icon /> </StyledLink>}
          {props.website && <StyledLink target="_blank" href={props.website}><WebsiteIcon /></StyledLink> }
        </IconWrapper>
      </Border>
    </Wrapper>
  );
}

export default Author;