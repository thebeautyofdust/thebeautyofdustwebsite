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
    flex: 0;
`

const Logo = styled('h1')`
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-weight: normal;
    padding: 2px 6px;

    @media ${devices.mobileL} { 
        font-size: 16px; 
    }
    @media ${devices.tablet} { 
        font-size: 18px; 
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
            <HeaderLogo>
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
