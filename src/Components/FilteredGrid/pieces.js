import React from 'react';
import styled from 'styled-components';
import Filters from './filters';
import Grid from './grid';
import pieces from '../../pieces.json';

const Wrapper = styled('div')`
    display: flex;    
    flex-direction: column;
`;

const filterItems = [
    {
        title: 'Spoken Work',
        id: 'spokenword'
    },
    {
        title: 'Trees',
        id: 'trees'
    }
];

class Pieces extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: pieces,
        }
    }
    formatForGrid(items) {
        return items.map(item => ({
            id: item.id,
            title: item.title,
            imageSrc: item.imageSrc
        }));
    }

    render() {  
        const { items } = this.state;

        return (
            <Wrapper>
                <Filters items={filterItems}/>
                {items && items.length && <Grid items={this.formatForGrid(items)} routePath="/piece/"/>}
            </Wrapper>  
        );
    }
}
  
export default Pieces;