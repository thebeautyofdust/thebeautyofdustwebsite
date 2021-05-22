import React from 'react';
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

const BodyContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GoHome = styled('button')`
  font-size: 18px;
  border: 1px solid black;
  background: transparent;
  color: black;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 10px;
`

const Text = styled('p')`
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  margin: 0;
`

const SubText = styled('p')`
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

class NotFound extends React.Component {
  render() {
    return (
        <BodyContainer>
            <Text>
                Oh dear, this page does not exist
            </Text>
            <SubText>To go to a page that does click below</SubText>
            <StyledLink to="/">
                <GoHome>
                    go to home page
                </GoHome>
            </StyledLink>
        </BodyContainer>
    );
  }
}


export default NotFound;