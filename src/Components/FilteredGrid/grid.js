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
`;

const TileImage = styled('img')`
    width: 100%;
    height: 100vw;
    object-fit: cover;
    @media ${devices.laptop} { 
        width: 30vw;   
        height: 27vw;
    }
    @media ${devices.tablet} { 
        width: 48vw;   
        height: 37vw;
    }
`;

const TileTitle = styled('p')`
    font-family: 'Cormorant Garamond', serif;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;



class Grid extends React.Component {
   
    renderTile({id, title, imageSrc}) {
        return (
            <StyledLink to={`${this.props.routePath}${id}`}>
                <TileWrapper>
                    <TileImage src={imageSrc}></TileImage>
                    <TileTitle>{title}</TileTitle>
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
  
  
  export default Grid;