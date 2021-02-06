import React, { Component } from 'react';
import './card.styles.css';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.monster.id,
            name: this.props.monster.name,
            email: this.props.monster.email
        })
    }

    render() {
        return (
            <div className='card-container'>
                <img
                    alt='monster'
                    src={`https://robohash.org/${this.state.id}?set=set2&size=180x180`}
                />
                <h2> {this.state.name} </h2>
                <p> {this.state.email} </p>
            </div>
        );
    }
}

export default Card;