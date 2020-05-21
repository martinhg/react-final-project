import React from 'react';
import './SearchBox.scss';


const state = {
    loading:false,
    error: null,
    data: undefined
}

const SearchBox = () => {
    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState('');

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
                onChange= { (e) => {
                    setSearch(e.target.value)
                }}
            />
            <button onClick={redir}>Search</button>
        </div>
        
    );
}

export default SearchBox;