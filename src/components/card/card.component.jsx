import React, { Component } from 'react';
import './card.styles.css';

class Card extends Component {

    render() {
        return (
            <div className='card-container'>
                <img
                    alt='monster'
                    src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
                />
                <h2> {this.props.monster.name} </h2>
                <p> {this.props.monster.email} </p>
            </div>
        );
    }
}

export default Card;