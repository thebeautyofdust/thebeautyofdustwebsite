import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Filters from './filters';
import Grid from './grid';
import pieces from '../../pieces.json';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled('div')`
    display: flex;    
    flex-direction: column;
`;

const SeeAll = styled('div')`
    
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
            filterBy: "",
        }
    }

    formatForGrid = (items) => {
        const { filterBy } = this.state;
        return items.map(item => ({
                    id: item.id,
                    title: item.title,
                    imageSrc: item.imageSrc
                
            })
        );
    }

    setFilter = (filter) => {
        const { filterBy, items } = this.state;
        var filteredItems  = [];
        items.forEach(item => {
            if (filterBy.length) {
                if( item.categories.includes(filterBy)) {
                    filteredItems.push(item);
                }
            } else {    
                filteredItems.push(item)
            }
        });

        this.setState({filterBy: filter, items: filteredItems})
    }

    render() {  
        const { items } = this.state;

        return (
            <Wrapper>
                <Filters items={filterItems} setFilter={this.setFilter}/>
                <SeeAll onClick={() => this.setFilter("")}>See All</SeeAll>
                {items && items.length && <Grid items={this.formatForGrid(items)} routePath="/piece/"/>}
            </Wrapper>  
        );
    }
}
  
export default Pieces;