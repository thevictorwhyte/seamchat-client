import React from 'react';

import './search.styles.scss';

const Search = () => {

    return (
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search"/>
            <button className="search__button">
                <svg className="search__icon">
                    <use xlinkHref='resources/sprite.svg#icon-magnifying-glass' />
                </svg>
            </button>
        </form>
    );
}

export default Search;

