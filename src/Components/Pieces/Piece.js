import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetPieceById } from './helpers';
import sheSaid from '../../images/she-said-480.mov';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';

import justin from '../../images/justin.jpg';

import VideoPlayer from './videoPlayer';

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

const  ContentsText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding-bottom: 10px;
`;

const ContentsContainer = styled('div')`
  display: flex;
  z-index: 4;
  padding-top: 15px;
`;

const ContentsItem = styled('div')`
  display: flex;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  text-decoration: underline;
  z-index: 5;
  padding: 0 15px;    
  font-size: 14px;
`;

const Title = styled('h3')`
    font-family: 'Cormorant Garamond', serif;
    margin: 5px 0;
    font-size: 55px;
`;

const By = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    margin-bottom: 10vh;
`;

const VideoContent = styled('iframe')`
`;

const GoToArtist = styled('button')`
  background: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Cormorant', serif;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
`;

const PieceText = styled('p')`
  font-family: 'Cormorant', serif;
`;

const Section = styled('section')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 50px);
  flex-direction: column;

  opacity: 0;
  transition: opacity .5s ease-in-out;
  -moz-transition: opacity .5s ease-in-out;
  -webkit-transition: opacity .5s ease-in-out;

  &.active {
    opacity: 1;
    transition: opacity 1.5s ease-in-out;
    -moz-transition: opacity 1.5s ease-in-out;
    -webkit-transition: opacity 1.5s ease-in-out;
  }

  &:last-child {
    display: flex;
    flex-direction: column;
  }
`;

const VideoContainer  = styled('video')`
    width: 100vw;
    height: calc(100vh - 50px);
    background: black;
    z-index:5;
`;

const HelpMessage = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 12px;
  padding: 0 10px;
  text-align: center;
`;

const LearnMoreContainer = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`;

const DownArrow = styled('button')`
  background: none;
  border: none;
  position: absolute;
  right: 4vw;
  bottom: 4vh;
  font-size: 20px;  
  cursor: pointer;
  z-index:10;
  
  &.white {
    color: white;
  }
`;

const UpArrow = styled('button')`
  background: none;
  border: none;
  position: absolute;
  right: 4vw;
  top: calc(4vh + 50px);
  font-size: 20px;  
  cursor: pointer;
  z-index:10;
  
  &.white {
    color: white;
  }
`;

const InterviewContainer = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;    
  font-size: 20px;

`;

const TempInterviewImage = styled('img')`
    width: 180px;
    height: auto;
    object-fit: contain;
    margin-right: 10px;    
    width: 50vw;
    padding-top: 15px;
`;


class Piece extends React.Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id
    this.state = {
     piece: GetPieceById(id),
     activeSection: 0
    }
    
    this.videoRef = React.createRef();
  }

  _handleArrowKey = (event) => {
    console.log(event);
    const { activeSection } = this.state;
    
    if(event.keyCode == 40 && activeSection < 3)  { 
      event.preventDefault();
      this.moveDownSection(activeSection)
    } 
    else if (event.keyCode == 38 && activeSection > 0) { 
      event.preventDefault();
      this.moveUpSection(activeSection)
    } 
  }

  moveDownSection = (activeSection) => { 
    this.setState({ activeSection: activeSection + 1 })
  }

  moveUpSection = (activeSection) => { 
    this.setState({ activeSection: activeSection - 1 })
  }

  componentWillMount = () => {
    document.addEventListener("keydown", this._handleArrowKey, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this._handleArrowKey, false);
  }

  componentDidUpdate = () => {
    const { activeSection } = this.state;
    if (activeSection == 1) {
      this.videoRef.current.play();
    }
  }

  setActiveSection = (section) => {
    this.setState({ activeSection: section })
  }

  upClick = () => {
    const { activeSection } = this.state;
    if( activeSection > 0)  { 
      this.moveUpSection(activeSection)
    } 
  }

  downClick = () => {
    const { activeSection } = this.state;
    if( activeSection < 3)  { 
      this.moveDownSection(activeSection)
    } 
  }

  render() {
    const {title, author, youtubeUrl, authorId, firstName} = this.state.piece;
    const { activeSection } = this.state;

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Wrapper>
          {activeSection > 0 && <UpArrow className={activeSection === 1 && 'white'} onClick={this.upClick}><FontAwesomeIcon icon={faLongArrowAltUp} /></UpArrow>}
          {activeSection < 3 && <DownArrow className={activeSection === 1 && 'white'} onClick={this.downClick}><FontAwesomeIcon icon={faLongArrowAltDown} /></DownArrow>}
          <Section className={activeSection == 0 ? 'active' : ''}>
            <TopText>
                <Title>{title}</Title>
                <By>{author}</By>
                <HelpMessage>
                  press the down key or tap the down arrow to move through the piece, or select a section below
                </HelpMessage>
            </TopText>
            <ContentsContainer>
              <ContentsItem onClick={() => this.setActiveSection(1)}>piece video</ContentsItem>
              <ContentsItem onClick={() => this.setActiveSection(2)}>piece text</ContentsItem>
              <ContentsItem onClick={() => this.setActiveSection(3)}>interview</ContentsItem>
            </ContentsContainer>
          </Section>
          <Section className={activeSection == 1 ? 'active' : ''}>
             <VideoContainer ref={this.videoRef} controls>
               <source src={sheSaid} type="video/mp4"/>
                Your browser does not support the video tag.
            </VideoContainer>

            {/* <iframe 
              width="560"
              height="315" 
              src="https://www.youtube.com/embed/hICPmWyoMM0" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe> */}
          </Section>
          <Section className={activeSection == 2 ? 'active' : ''}>
            <PieceText>
              She said<br/>
              they said<br/>
              and then she wept<br/>
              her muted tears<br/>
              her civil refrain<br/>
            </PieceText>
          </Section >
          <Section className={activeSection == 3 ? 'active' : ''}>
            <LearnMoreContainer>
              <InterviewContainer>
                watch the interview with justin about the piece
                <TempInterviewImage src={justin} />
              </InterviewContainer>

              <StyledLink to={`/author/${authorId}`}>
                <GoToArtist>learn more about {firstName}</GoToArtist>
              </StyledLink>
            </LearnMoreContainer>
            <Footer />
          </Section>
        </Wrapper>
        {/* <Footer /> */}
    </ThemeProvider>
    );
  }
}

export default Piece;