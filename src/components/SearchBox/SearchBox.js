import React, { useState } from 'react';
import './SearchBox.scss';

const SearchBox = () => {
    const [search, setSearch] = useState('');

    const redir = () => {
        window.location.href = `/search/${search}`;
    }

    return (
        <div className="search-box-container">
            <i className="fas fa-search"></i>
            <input 
                className="searchBox-input" 
                placeholder="Type the name of your favourite artist"
                value= { search }
                onChange= { (event) => {
                    setSearch(event.target.value)
                }}
                onKeyPress={event=>{
                    if(event.key==='Enter')
                        redir();
                }}
            />
        </div>
    );
}

export default SearchBox;