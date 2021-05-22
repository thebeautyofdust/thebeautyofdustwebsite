import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SupportText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 1px;
`;

const Email = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding-top: 20px;
`;
const Padding = styled('div')`
  padding-top: 10px;
`;

function Support() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="contact"/>
      <GlobalStyles />
      <Wrapper>
        <SupportText>
          <SupportText>Partner with our artists to help them create more works.</SupportText>
          <SupportText>Send stories about how these art pieces have impacted your context.</SupportText>
          <SupportText>Contact us for further information of how you can support our artists.</SupportText>
          <Email><a href="mailto:thebeautyofdust@gmail.com">thebeautyofdust@gmail.com</a></Email>
        </SupportText>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default Support;