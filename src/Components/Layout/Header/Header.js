import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './burger';
import Menu from './menu';
import { useOnClickOutside } from '../../../Common/hooks';
import '../../../index.css';
import { devices } from '../../../Common/devices';
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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled('h1')`
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-weight: normal;
    padding: 2px 2px;
    position: absolute;
    right: 50px;
    text-align: right;

    @media ${devices.mobileL} { 
        font-size: 16px; 
    }
    @media ${devices.tablet} { 
        font-size: 18px; 
    }

    @media ${devices.maxTablet} { 
        position: absolute;
        right: 57px;
        top: 10px;
        font-size: 16px;
    }
`


const LogoSub = styled('h1')`
    font-family: 'Cormorant Garamond', serif;
    margin: 0;
    text-align: center;
    font-style: italic;
    font-size: 16px;
    font-weight: 100;

    @media ${devices.maxTablet} { 
        position: absolute;
        right: 57px;
        top: 30px;
        font-size: 11px;
        padding-right: 2px;
    }

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
    pointer: cursor;
    align-items: center;
`;

const TestLogo = styled('img')`
    width: 40px;
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
            <HeaderLogo>

            <LogoSub>everyday imagination</LogoSub>
            </HeaderLogo>
            <HeaderRight>
                <StyledLink to="/">
                    <Logo>the beauty of dust</Logo>
                    <TestLogo src={Little_Logo} />
                </StyledLink>
            </HeaderRight>
        </Wrapper>
      </StyledHeader>
  );
}
export default Header;
