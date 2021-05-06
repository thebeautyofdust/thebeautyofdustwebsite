import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetPieceById } from './helpers';

const Wrapper = styled('div')`
  display: flex;
`

class Piece extends React.Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id
    this.state = {
     piece: GetPieceById(id)
    }
  }

  render() {
    const {title, author} = this.state.piece;

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <Wrapper>
            Name: {title}
            <br />s
            Author: {author}
        </Wrapper>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Piece;