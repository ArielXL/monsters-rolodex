import React, { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {

    render() {
        return (
            <div className='card-list'>
                {this.props.children}
            </div>
        );
    }
}

export default CardList;