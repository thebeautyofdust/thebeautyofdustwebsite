import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
`;

const TileWrapper = styled('div')`
    display: flex;
`;

const TileImage = styled('img')`
    min-width: 30px;
    height: auto;
`;

const TileTitle = styled('p')`
`;


class Grid extends React.Component {
    renderTile({id, title, imageSrc}) {
        return (
            <TileWrapper>
                <TileImage src={imageSrc}></TileImage>
                <TileTitle>{title}</TileTitle>
            </TileWrapper>
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
                    grid items
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