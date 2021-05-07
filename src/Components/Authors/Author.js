import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetAuthorById } from './helpers';

const Wrapper = styled('div')`
  display: flex;
`

class Author extends React.Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id
    this.state = {
      author: GetAuthorById(id)
    }
  }

  render() {
    const {name, author} = this.state.author;

    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <Wrapper>
            Name: {name}
        </Wrapper>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Author;