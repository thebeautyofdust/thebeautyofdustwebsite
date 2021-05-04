import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
    width: 100vw;
    min-height: 100px;
    justify-content: center;
    align-items: center
`

function Footer() {
  return (
    <Wrapper >
    <>
      &copy; the beauty of dust 2021
    </>
  </Wrapper>
  );
}
export default Footer;

// TODO:
// - Add socials