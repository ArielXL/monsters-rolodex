import React, { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { placeholder, handleChange } = this.props;

        return (
            <input
                className='search'
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        );
    }
}

export default SearchBox;