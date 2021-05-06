import React from 'react';
import styled from 'styled-components';
import shesaid from '../../images/she-said.jpg';
import path from '../../images/path.jpg';


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
}
`

const NextButton = styled('button')`
  position: absolute;
  top: calc(50vh);
  right: 40px; 
`

const Title = styled('h1')`
  position: absolute;
  bottom: 10vh;
  text-align: center;
  left: 0;
  right: 0;
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
    const { imgPath, title, index } = this.state.piece;

    return (
      <BodyContainer>
      <ImageContainer>
        {/* {this.getImage(index)} */}
        <Image src={imgPath} />
        <BackButton onClick={() => this.handleNextClick(index)}>back</BackButton>
        <NextButton onClick={() => this.handlePrevClick(index)}>next</NextButton>
        <Title>{title}</Title>
      </ImageContainer>
    </BodyContainer>
    );
  }
}


export default PieceBook;