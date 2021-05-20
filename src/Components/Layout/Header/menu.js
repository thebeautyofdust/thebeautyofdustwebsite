import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  font-family: CormorantGaramond;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding: 2rem 0;
    font-weight: bold;
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    width: 270px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  .active {
    color: #c4c4c4;
    pointer-events: none;
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

const Menu = ({ open, setOpen, activePage}) => {
  console.log("active", activePage);
  return (
    <StyledMenu open={open} onClick={
      (event) => {
        if(event.target === event.currentTarget) {
          setOpen(false)
        }
      }}
    >
      <a className={activePage === "pieces" ? "active" : ''} href="/#/pieces">
        pieces.
        </a>
      <a className={activePage === "authors" ? "active" : ''} href="/#/authors">
        authors.
        </a>
      <a className={activePage === "about" ? "active" : ''} href="/#/about">
        about us.
      </a>
      <a className={activePage === "contact" ? "active" : ''} href="/#/contact">
        contact.
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;