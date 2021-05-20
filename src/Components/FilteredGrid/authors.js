import React from 'react';
import styled from 'styled-components';
import Filters from './filters';
import Grid from './grid';
import authors from '../../authors.json';

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
            filterBy: "",
        }
    }

    formatForGrid(items) {
        return items.map(item => ({
            id: item.id,
            title: item.name,
            imageSrc: item.imageSrc
        }));
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
                {/* <FiltersWrapper>
                    <Filters items={filterItems} setFilter={this.setFilter}/>
                    <SeeAll onClick={() => this.setFilter("")}>See All</SeeAll>
                </FiltersWrapper> */}
                {items && items.length && <Grid items={this.formatForGrid(items)} routePath="/author/"/>}
            </Wrapper>  
        );
    }
}
  
export default Authors;