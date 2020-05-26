import React, { useState, useEffect} from 'react';
import api from '../../services/spotifyApi';
import ArtistsPage from './ArtistsPage';

const ArtistsPageContainer = (props) => {

    const search = props.match.params.search;
    const [result, setResult] = useState([{}]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const data = await api.spotify.getArtists(search);
            setResult(data.artists.items);
        }
        catch(error) {
            console.log(error)
        }
    }

    if (result.length > 1){
        return (
            <ArtistsPage artists= {result} search={search}/>
        );
    }
    return ('');
}

export default ArtistsPageContainer;