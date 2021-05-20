import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled('div')`
    display: flex;
    width: 100vw;
    min-height: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Socials = styled('div')`
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding-left: 7px;
  font-size: 30px;
`;

const Text = styled('p')`
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
`

function Footer() {
  return (
    <Wrapper>
      {/* <Socials>
        <StyledFontAwesomeIcon icon={faInstagram} />
        <StyledFontAwesomeIcon icon={faFacebookSquare} />
      </Socials> */}
      <Text>&copy; the beauty of dust 2021</Text>
  </Wrapper>
  );
}
export default Footer;

// TODO:
// - Add socials