import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Burger from './burger';
import Menu from './menu';
import { useOnClickOutside } from '../../../Common/hooks';

interface HeaderProps {
  title: string
}

const StyledHeader = styled('header')`
    box-shadow: 0 0 4px rgb(0 0 0 / 10%);
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 600;
`

const Wrapper = styled('div')`
    background: #FFFFFF;
    position: relative;
    z-index: 5;
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
  flex: 1;
`

const HeaderLogo = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Logo = styled('h1')`
    margin: 0;
    padding: 0;
    font-family: CormorantGaramond;
    font-size: 20px;
`

const LogoTagline = styled('p')`
    margin: 0;
    padding: 0;
    font-family: CormorantGaramond;
    font-size: 10px;
`

const HeaderRight = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

  return (
      <StyledHeader>
        <Wrapper>
            <HeaderLeft>
                <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
                </div>
            </HeaderLeft>
            <HeaderLogo>
                <Logo>the beauty of dust</Logo>
                <LogoTagline>everyday imagination</LogoTagline>
            </HeaderLogo>
            <HeaderRight></HeaderRight>
        </Wrapper>
      </StyledHeader>
  );
}
export default Header;
