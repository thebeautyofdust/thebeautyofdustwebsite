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

const FiltersWrapper = styled('div')`
    padding: 20px;
    display: flex;    
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

const SeeAll = styled('div')`
    cursor: pointer;
    font-family: 'Cormorant Garamond', serif;
`;

const filterItems = [
    {
        title: 'personal development',
        id: 'personaldevelopment'
    },
    {
        title: 'spirituality ',
        id: 'spirituality'
    },
    {
        title: 'leadership',
        id: 'leadership'
    },
    {
        title: 'inspirational',
        id: 'inspirational'
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
        const items = pieces;
        var filteredItems  = [];
        items.forEach(item => {
            if (!!filter) {
                if(item.categories.includes(filter)) {
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
                <FiltersWrapper>
                    <Filters items={filterItems} setFilter={this.setFilter}/>
                    <SeeAll onClick={() => this.setFilter("")}>See All</SeeAll>
                </FiltersWrapper>
                {items && items.length && <Grid items={this.formatForGrid(items)} routePath="/piece/"/>}
            </Wrapper>  
        );
    }
}
  
export default Pieces;