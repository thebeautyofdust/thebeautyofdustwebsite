import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetPieceById } from './helpers';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopText = styled('div')`
    margin: 10px 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled('h3')`
    font-family: 'Cormorant Garamond', serif;
    margin-bottom: 5px;
    font-size: 50px;
`;
const By = styled('p')`
    font-family: 'Cormorant Garamond', serif;
`;

const VideoContent = styled('iframe')`
`;

class Piece extends React.Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id
    this.state = {
     piece: GetPieceById(id)
    }
  }

  render() {
    const {title, author, youtubeUrl} = this.state.piece;

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <Wrapper>
            <TopText>
                <Title>{title}</Title>
                <By>{author}</By>
            </TopText>
            <VideoContent 
                width="560"
                height="315"
                src={youtubeUrl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </Wrapper>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Piece;