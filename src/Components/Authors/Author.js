import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import { GetAuthorById } from './helpers';

const Wrapper = styled('div')`
  display: flex;
  height: calc(100vh - 150px);
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  font-family: 'Cormorant Garamond', serif;

`

const CommingSoon = styled('div')`
  font-size: 30px;
  padding-top: 10px;
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
            more about {name}
            <CommingSoon>coming soon</CommingSoon>
        </Wrapper>
        <Footer />
    </ThemeProvider>
    );
  }
}

export default Author;