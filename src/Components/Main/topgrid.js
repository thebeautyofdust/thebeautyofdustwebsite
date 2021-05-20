import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../Common/devices';

const Wrapper = styled('div')`
    display: flex;   
    flex-wrap: wrap;
    padding: 0.5vw;
`;

const TileWrapper = styled('div')`
    display: flex;    
    flex-direction: column;
    padding: 10px;
    width: 49.5vw;   
    height: 49.5vw;

    @media ${devices.laptop} {   
        width: 24.7vw;
        height: 24.7vw;
    }
`;

const TileImage = styled('img')`
    width: 100%;
    height: 50vw;
    flex: 1;
    object-fit: cover;
    overflow: hidden;
    
    &.border {
        border: 3px solid black;
    }
`;

const TileTitle = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    margin: 0;
    height: 25px;
    font-size: 20px;
`;

const TileSubTitle = styled('p')`
    font-family: 'Cormorant Garamond', serif;
    font-size: 12px;
    margin: 0;
    height: 14px;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;



class TopGrid extends React.Component {
   
    renderTile({title, imageSrc, url, shortText, classNames}) {
        return (
            <StyledLink to={url}>
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