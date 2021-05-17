import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './burger';
import Menu from './menu';
import { useOnClickOutside } from '../../../Common/hooks';
import '../../../index.css';

import logo from '../../../images/logo.png';
import logo2 from '../../../images/logo_triangle.png';
import logo_big from '../../../images/logo_big.png';
import Little_Logo from '../../../images/Little_Logo.png'

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
    flex: 4;
`

const Logo = styled('h1')`
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: normal;
    padding: 0px 6px;
`

const LogoTagline = styled('p')`
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
`

const HeaderRight = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
`;

const TestLogo = styled('img')`
    width: 45px;
    height: auto;
    object-fit: contain;
    margin-right: 10px;
`;

function Header(props) {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const { activePage } = props;

  return (
      <StyledHeader>
        <Wrapper>
            <HeaderLeft>
                <div >
                    <Burger open={open} setOpen={setOpen} />
                    <Menu activePage={activePage} open={open} setOpen={setOpen}/>
                </div>
            </HeaderLeft>
            <StyledLink to="/">
                <HeaderLogo>

                {/* <TestLogo src={logo_big} /> */}
                    {/* <Logo>the beauty of dust</Logo>
                    <LogoTagline>everyday imagination</LogoTagline> */}
                </HeaderLogo>
            </StyledLink>
            <HeaderRight>
                        {/* <HeaderLogo>

                <Logo>the beauty of dust</Logo>
                <LogoTagline>everyday imagination</LogoTagline>
            </HeaderLogo> */}
                {/* <TestLogo src={logo3} /> */}
                    {/* <TestLogo src={logo} /> */}
{/* <TestLogo src={logo_big} /> */}
                    {/* 
                    <LogoTagline>everyday imagination</LogoTagline> */}
                <Logo>the beauty of dust</Logo>
                <TestLogo src={Little_Logo} />
                    
            </HeaderRight>
        </Wrapper>
      </StyledHeader>
  );
}
export default Header;
