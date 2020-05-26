import React, { useState, useEffect} from 'react';
import api from '../../services/spotifyApi';
import ArtistsPage from './ArtistsPage';

const ArtistsPageContainer = (props) => {
    const search = props.match.params.search;
    const [result, setResult] = useState([{}]);
    // var bandera = false

    useEffect( () => {
        fetchData();
        // bandera = true;
        // setResult(data, setResult);
    }, []);

    // console.log(result.artists.items);

    const fetchData = async () => {
        // this.setState( { loading: true, error: null } );
    
        try {
            const data = await api.spotify.getArtists(search);
            // console.log(data.artists.items);
            setResult(data.artists.items);
            // bandera= true;
            // localStorage.setItem('artist', data.artists.items);
            
            // console.log(data.artists.items);
            // this.setState( { loading: false, data: data } )
        }
        catch(error) {
            // this.setState( { loading: false, error: error } )
            console.log(error)
        }
    }
    // console.log(result);
    if (result.length > 1){
        return (
            <ArtistsPage artists= {result} search={search}/>
        );

    }
        return (
            ''
        );

}

export default ArtistsPageContainer;