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
    }, []);

    const getAlbumInfo = async () => {

       try {
           const data = await api.spotify.getAlbum(albumId);
           setAlbum(data);
       }
       catch(error) {
           console.log(error)
       }
   }

   const getAlbumTracks = async () => {

        try {
            const data = await api.spotify.getAlbumTracks(albumId);
            setTracks(data.items);
        }
        catch(error) {
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