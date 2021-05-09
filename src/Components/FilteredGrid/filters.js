import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;    
    width: 200px;
    position: relative;
`;

const Header = styled('div')`
    display: flex;
    width: 200px;
    height: 35px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`;

const ListTitle = styled('div')`
    display: flex;
`;

const List = styled('div')`
    flex-direction: column;
    display: ${props => props.open ? 'flex' : 'none'};
    position: absolute;
    top: 35px;
    width: 200px;
    background: white;
`;

const ListItem = styled('div')`
    padding: 6px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    &:last-child {
        border-bottom: 1px solid black;
    }
`;
const ListItemText = styled('span')`
    cursor: pointer;
`;

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    setOpen = (value) => {
        this.setState({open: value})
    }
    
    handleClick = (id) => {
        console.log(id);
    }

    toggleList = () => {
        this.setState(prevState => ({
          isListOpen: !prevState.isListOpen
       }))
     }

    renderItem = ({title, id}) => {
        return (
            <ListItem onClick={() => this.handleClick(id)}><ListItemText>{title}</ListItemText></ListItem>
        );
    }

    render() {  
        const { items } = this.props;
        console.log('items', items)
        return (
            <Wrapper  
                onBlur={() => this.setOpen(true)}
                onClick={() => this.setOpen(true)}
                onMouseEnter={() => this.setOpen(true)}
                onMouseLeave={() => this.setOpen(false)}>
                <Header>
                    <ListTitle><ListItemText>Filter By</ListItemText></ListTitle>
                </Header>
                <List open={this.state.open}>
                    {items.map(item => this.renderItem(item))}
                </List>
            </Wrapper>
        );
    }
}
  
export default Filters;
