import React, { useState, useEffect} from 'react';
import ArtistPage from './ArtistPage';
import api from '../../services/spotifyApi';

const ArtistPageContainer = (props) => {

    const artistId = props.match.params.artistId;
    const [artist, setArtist] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect( () => {
        getArtist();
        getArtistAlbums();
    }, []);

    const getArtist = async () => {

        try {
            const data = await api.spotify.getArtist(artistId);
            setArtist(data);
        }
        catch(error) {
            console.log(error)
        }
    }

    const getArtistAlbums = async () => {

       try {
           const data = await api.spotify.getArtistAlbums(artistId);
           setAlbums(data.items);
       }
       catch(error) {
           console.log(error)
       }
   }

   if (albums.length > 1 && Object.keys(artist).length > 0) {
        return (
            <ArtistPage artist={artist} albums={albums} />
        );
   }
   return('');

    
}

export default ArtistPageContainer;