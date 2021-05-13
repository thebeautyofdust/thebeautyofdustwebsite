import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';
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

const Image = styled('img')`
  width: 100%;
  height: calc(100% - 20px);
  object-fit: cover;
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
      return <Image src={shesaid} />
    }
    else {
      return <Image src={path} /> 
    }
  }

  render() {
    const { id, imgPath, title, index } = this.state.piece;

    return (
      <BodyContainer>
      <ImageContainer>
        {this.getImage(index)}
        {/* <Image src={imgPath} /> */}
        <BackButton onClick={() => this.handleNextClick(index)}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </BackButton>
        <NextButton onClick={() => this.handlePrevClick(index)}>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </NextButton>
        <TitleContainer>
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