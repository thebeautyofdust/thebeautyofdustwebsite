import React from 'react';
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import shesaid from '../../images/she-said.jpg';
import path from '../../images/path.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { getFirstPiece, getNextPiece, getPrevPiece, getImageByKey } from './helpers';

const BodyContainer = styled('div')`
  width: 100%;
  height: 100%;
`

const ImageContainer = styled('div')`
  width: 100%;
  height: 100%;
`

const fadeIn = keyframes`
from {
  opacity:0;
  bottom: 5vh;
}
to { 
  opacity: 1;
  bottom: 10vh;
}
`

const Image = styled('img')`
  position: absolute;
  width: calc(100vw - 40px);
  height: calc(100% - 70px);
  object-fit: cover;
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
`

const BackButton = styled('button')`
  position: absolute;
  top: calc(50vh);
  left: 40px;
  font-size: 25px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
`

const NextButton = styled('button')`
  position: absolute;
  top: calc(50vh);
  right: 40px; 
  font-size: 25px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
`

const TitleContainer = styled('div')`
  position: absolute;
  bottom: 10vh;
  text-align: center;
  left: 0;
  right: 0;
  animation: ${fadeIn} 1.5s 1;
`
const Title = styled('h1')`
  font-family: 'Cormorant Garamond', serif;
  color: white;
`

const PieceButton = styled('button')`
  font-size: 15px;
  border: 1px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
`

class PieceBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      piece: getFirstPiece()
    }
  }

  handleNextClick = (index) => {
    const nextPiece = getNextPiece(index);
    this.setState({piece: nextPiece});
  }

  handlePrevClick = (index) => {
    const prevPiece = getPrevPiece(index);
    this.setState({piece: prevPiece});
  }

  getImage = (index) => {
    if (index == 0) {
      return <Image className={index === 0 ? "active" : ""} src={shesaid} />
    }
    else {
      return <Image className={index === 1 ? "active" : ""}  src={path} /> 
    }
  }

  render() {
    const { id, imgPath, title, index } = this.state.piece;

    return (
      <BodyContainer>
      <ImageContainer>
        {/* {this.getImage(index)} */}
        {/* <Image src={imgPath} /> */}
        <Image className={index === 0 ? "active" : ""} src={shesaid} />
        <Image className={index === 1 ? "active" : ""}  src={path} /> 

        <BackButton onClick={() => this.handleNextClick(index)}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </BackButton>
        <NextButton onClick={() => this.handlePrevClick(index)}>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </NextButton>
        <TitleContainer key={id}>
          <Title>{title}</Title>
          <Link to={`piece/${id}`}>
            <PieceButton>go to piece</PieceButton>
          </Link>
        </TitleContainer>
      </ImageContainer>
    </BodyContainer>
    );
  }
}


export default PieceBook;