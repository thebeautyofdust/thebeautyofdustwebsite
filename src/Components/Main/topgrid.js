import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../Common/devices';

const Wrapper = styled('div')`
    display: flex;   
    flex-wrap: wrap;
    padding: 0.5vw;
    max-width: 1000px;
    margin: auto;

`;

const TileWrapper = styled('div')`
    display: flex;    
    flex-direction: column;
    padding: 15px;      
    flex: 1;
    min-height: 350px;
`;

const TileImage = styled('img')`
    width: 100%;
    height: 100%;
    flex: 1;
    object-fit: cover;
    overflow: visible;
    
    &.border {
        border: 3px solid black;
    }
`;

const TileTitle = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    margin: 0;
    height: 25px;
    font-size: 20px;
    width: 100%;
    white-space: nowrap;
`;

const TileSubTitle = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    margin: 0;
    height: 14px;
    width: 100%;
    white-space: nowrap;

`;

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    width: 100%;

    @media ${devices.tablet} { 
        width: 49.5%;
    }

`;



class TopGrid extends React.Component {
   
    renderTile({id, title, imageSrc, url, shortText, classNames}) {
        return (
            <StyledLink id={id} to={url}>
                <TileWrapper>
                    <TileImage className={classNames} src={imageSrc}></TileImage>
                    <TileTitle>{title}</TileTitle>
                    <TileSubTitle>{shortText}</TileSubTitle>
                </TileWrapper>
            </StyledLink>
        );
    }

    render() { 
        const { items } = this.props;
        if (items && items.length) {
            return (
                <Wrapper>
                    {
                        items.map((item) => this.renderTile(item))
                    }
                </Wrapper>
            );
        }
        else {
            return (
                <Wrapper>Loading...</Wrapper>
            );
        }
    }
}
  
  
  export default TopGrid;