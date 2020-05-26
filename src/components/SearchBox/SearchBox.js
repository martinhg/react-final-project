import React, { useState } from 'react';
import './SearchBox.scss';


const state = {
    loading:false,
    error: null,
    data: undefined
}

const SearchBox = (props) => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState('');

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