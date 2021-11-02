import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link }from 'react-router-dom';
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
import mixpanel from 'mixpanel-browser';

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
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled('section')`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VideoContainer  = styled('div')`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    min-height: 100vh;
`;

const LearnMoreContainer = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`;

const QuestionContainer = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 13px;
  padding: 10px;
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

const IFrame = styled('iframe')`
  max-width: 100% !important;
  margin: 2em 0;
`;

const IFramePiece = styled('iframe')`
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

    mixpanel.init('55bc83f2f66404f4e75e43ca1cecaf6f'); 
    mixpanel.track(`View Piece ${title}`);
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Wrapper>
          {/* {activeSection > 0 && <UpArrow className="up" color={activeSection === 1 && 'white'} onClick={this.upClick} />}
          {activeSection < 3 && <DownArrow className="down" color={activeSection === 1 && 'white'} onClick={this.downClick} />} */}
          <Section>
            <TopText>
                <Title>{title}</Title>
                <By>{author}</By>
            </TopText>
            {/* <ContentsContainer>
              <ContentsItem>piece video</ContentsItem>
              <ContentsItem>piece text</ContentsItem>
              <ContentsItem>interview</ContentsItem>
            </ContentsContainer> */}
          </Section>
          <ContentSection>
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
          </ContentSection>
          <ContentSection>
            <QuestionContainer>
              Take note of your response after hearing the piece, did any part stand out? <br/>Could it relate to your context or role?
            </QuestionContainer>
            <PieceText>
             {this.getPieceText(id)}
            </PieceText>
          </ContentSection >
          <Section>
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
              <StyledLink to={`/authors`}>
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
