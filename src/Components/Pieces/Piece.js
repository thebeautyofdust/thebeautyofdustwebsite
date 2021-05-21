import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalStyles, Arrow } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetPieceById } from './helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';

import SheSaidText from './piecetext/shesaid';
import FreeWriteText from './piecetext/freewrite';
import IntoTheWoodsText from './piecetext/intothewoods';
import NeverAloneText from './piecetext/neveralone';

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
    text-align: center;
`;

const By = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    margin-bottom: 10vh;
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
  display:none;
  opacity: 0;
  transition: opacity .5s ease-in-out;
  -moz-transition: opacity .5s ease-in-out;
  -webkit-transition: opacity .5s ease-in-out;

  &.active {
    opacity: 1;
    display:flex;
    transition: opacity 1.5s ease-in-out;
    -moz-transition: opacity 1.5s ease-in-out;
    -webkit-transition: opacity 1.5s ease-in-out;
  }

  &:last-child {
    flex-direction: column;
  }
`;

const VideoContainer  = styled('div')`
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

const DownArrow = styled(Arrow)`
  position: fixed;
  right: 4vw;
  bottom: 4vh;
  z-index:10;
  cursor: pointer;
`;

const UpArrow = styled(Arrow)`
  position: fixed;
  right: calc(4vw - 11px);
  top: calc(4vh + 50px);
  z-index:10;
  cursor: pointer;
`;

const QuestionContainer = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  bottom: 10vh;
  left: 5vw;
  position: absolute;
  font-style: italic;
  font-size: 13px;
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

const InterviewVideoContainer  = styled('video')`
    min-width: 50vw;
    height: auto;
    z-index: 5;    
    margin: 2em 0;
`;

const IFrame = styled('iframe')`
  max-width: 100% !important;
  margin: 2em 0;
`;

const IFramePiece = styled('iframe')`
  width: 100% !important;
  height: 100% !important;
`;

function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

class Piece extends React.Component {
  constructor(props) {
    super(props);
    const queryString = parseQuery(props.location.search)
    let activeSection = 0;
    if (queryString && queryString.section) {
      activeSection = queryString.section === 'interview' ? 3 : 0;
    }

    const id = props.match.params.id
    this.state = {
     piece: GetPieceById(id),
     activeSection: activeSection
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
      // this.videoRef.current.play();
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

  getPieceText = (id) => {
    if (id === 'shesaid') {
      return <SheSaidText />
    }
    else if (id === 'freewrite') {
      return <FreeWriteText />
    } 
    else if (id === 'trees') {
      return <IntoTheWoodsText />
    } 
    else if (id === 'neveralone') {
      return <NeverAloneText />
    }
  }

  render() {
    const {id, title, author, interviewUrl, authorId, firstName, youtubeUrl} = this.state.piece;
    const { activeSection } = this.state;

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Wrapper>
          {activeSection > 0 && <UpArrow className="up" color={activeSection === 1 && 'white'} onClick={this.upClick} />}
          {activeSection < 3 && <DownArrow className="down" color={activeSection === 1 && 'white'} onClick={this.downClick} />}
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
             {/* <VideoContainer ref={this.videoRef} controls>
               {this.getVideo(id)}
                Your browser does not support the video tag.
            </VideoContainer> */}
            <VideoContainer>
            <IFramePiece 
              width="560"
              height="315" 
              src={youtubeUrl}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen="allowfullscreen">
            </IFramePiece>
            </VideoContainer>
          </Section>
          <Section className={activeSection == 2 ? 'active' : ''}>
            <PieceText>
             {this.getPieceText(id)}
            </PieceText>

            <QuestionContainer>
              Take note of your response after hearing the piece, did any part stand out? <br/>Could it relate to your context or role?
            </QuestionContainer>
          </Section >
          <Section className={activeSection == 3 ? 'active' : ''}>
            <LearnMoreContainer>
              {interviewUrl && 
                <InterviewContainer>
                  {`watch the interview with ${firstName} about the piece`}
                  <IFrame 
                    width="560"
                    height="315" 
                    src={interviewUrl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </IFrame>
                </InterviewContainer>
              }
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
