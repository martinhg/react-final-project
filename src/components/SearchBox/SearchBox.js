import React from 'react';
import './SearchBox.scss';
import api from '../../services/spotifyApi';

const state = {
    loading:false,
    error: null,
    data: undefined
}

const fetchData = async () => {
    this.setState( { loading: true, error: null } );

    try {
        const data = await api.spotify.list('michael');
        this.setState( { loading: false, data: data } )
    }
    catch(error) {
        this.setState( { loading: false, error: error } )
    }
}

const SearchBox = (state = state) => {
    const [query, setQuery] = React.useState('');

    return (
        <div className="search-box-container">
            <i className="fas fa-search"></i>
            <input 
                className="searchBox-input" 
                placeholder="Type the name of your favourite artist"
                value= { query }
                onChange= { (e) => {
                    setQuery(e.target.value)
                }}
            />
            <button onClick={fetchData}>sds</button>
        </div>
        
    );
}

export default SearchBox;