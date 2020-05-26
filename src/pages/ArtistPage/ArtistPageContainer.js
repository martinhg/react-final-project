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
        // setResult(data, setResult);
    }, []);

    const getArtist = async () => {
         // this.setState( { loading: true, error: null } );

        try {
            const data = await api.spotify.getArtist(artistId);
            setArtist(data);
            // localStorage.setItem('artist', data.artists.items);
            
            // console.log(data.artists.items);
            // this.setState( { loading: false, data: data } )
        }
        catch(error) {
            // this.setState( { loading: false, error: error } )
            console.log(error)
        }
    }

    const getArtistAlbums = async () => {
        // this.setState( { loading: true, error: null } );

       try {
           const data = await api.spotify.getArtistAlbums(artistId);
           setAlbums(data.items);
           // localStorage.setItem('artist', data.artists.items);
           
           // console.log(data.artists.items);
           // this.setState( { loading: false, data: data } )
       }
       catch(error) {
           // this.setState( { loading: false, error: error } )
           console.log(error)
       }
   }
   console.log(artist);

   if (albums.length > 1 && Object.keys(artist).length > 0) {
        return (
            <ArtistPage artist={artist} albums={albums} />
        );
   }
   return('');

    
}

export default ArtistPageContainer;