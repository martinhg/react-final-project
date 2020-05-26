import React, { useState, useEffect} from 'react';
import AlbumPage from './AlbumPage';
import api from '../../services/spotifyApi';

const AlbumPageContainer = (props) => {
    const albumId = props.match.params.albumId;
    const [album, setAlbum] = useState([]);
    const [tracks, setTracks] = useState([]);

    useEffect( () => {
        getAlbumInfo();
        getAlbumTracks();
        // setResult(data, setResult);
    }, []);

    const getAlbumInfo = async () => {
        // this.setState( { loading: true, error: null } );

       try {
           const data = await api.spotify.getAlbum(albumId);
        //    console.log(data);
           setAlbum(data);
           // localStorage.setItem('artist', data.artists.items);
           
           // console.log(data.artists.items);
           // this.setState( { loading: false, data: data } )
       }
       catch(error) {
           // this.setState( { loading: false, error: error } )
           console.log(error)
       }
   }

   const getAlbumTracks = async () => {
    // this.setState( { loading: true, error: null } );

        try {
            const data = await api.spotify.getAlbumTracks(albumId);
            // console.log(data.items)
            setTracks(data.items);
            // localStorage.setItem('artist', data.artists.items);
            
            // console.log(data.artists.items);
            // this.setState( { loading: false, data: data } )
        }
        catch(error) {
            // this.setState( { loading: false, error: error } )
            console.log(error)
        }
    }
    if (tracks.length > 1 && Object.keys(album).length > 0) {
        return (
            <AlbumPage album={album} tracks={tracks} />
        );  
    }
    return('');
}

export default AlbumPageContainer;