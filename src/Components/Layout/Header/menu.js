import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

export const StyledMenu = styled.nav`

font-family: CormorantGaramond;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bluewhite};
  top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
  text-align: center;
  padding: 2rem;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease-in-out;

  display: ${({ open }) => open ? 'flex' : 'none'};
  opacity: ${({ open }) => open ? 0.9 : 0};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/#/about">
        About us
      </a>
      <a href="/#/pieces">
        Pieces
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;