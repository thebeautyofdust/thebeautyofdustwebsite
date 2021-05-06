import React from 'react';
import styled from 'styled-components';
import Filters from './filters';
import Grid from './grid';
import authors from '../../authors.json';

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

class Authors extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: authors,
        }
    }
    formatForGrid(items) {
        return items.map(item => ({
            id: item.id,
            title: item.name,
            imageSrc: item.imageSrc
        }));
    }
    render() {  
        const { items } = this.state;

        return (
            <Wrapper>
                <Filters items={filterItems}/>
                {items && items.length && <Grid items={this.formatForGrid(items)}/>}
            </Wrapper>  
        );
    }
}
  
export default Authors;