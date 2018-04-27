import React from 'react';

const SearchBox = ({ searchchange }) => {
    return (
        <div className="tc">
            <input 
                className="br-pill pv2 ph3 ba b--blue white bg-gray" 
                type="search" 
                id="searchInput" 
                name="q" 
                placeholder="Search RoboFriends..."
                onInput={searchchange}
            />
        </div>
    )
}

export default SearchBox;