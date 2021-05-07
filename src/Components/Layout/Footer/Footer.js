import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
    width: 100vw;
    min-height: 100px;
    justify-content: center;
    align-items: center
`

const Text = styled('p')`
    font-family: 'Cormorant Garamond', serif;
`
function Footer() {
  return (
    <Wrapper >
    <>
      <Text>&copy; the beauty of dust 2021</Text>
    </>
  </Wrapper>
  );
}
export default Footer;

// TODO:
// - Add socials