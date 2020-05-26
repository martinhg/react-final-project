import React, { useState } from 'react';
import './Track.scss';
import Fav from '../Fav/Fav';

const Track = (props) => {

    const [playingUrl, setPlayingUrl] = useState('');
    const [audio, setAudio] = useState(null);
    const [playing, setPlaying] = useState(false);

    const playTrack = (previewUrl) => {
        let track = new Audio(previewUrl);

        if (!playing) {
            track.play();
            setPlaying(true);
            setPlayingUrl(previewUrl);
            setAudio(track);
        } else {
            audio.pause();
            setPlaying(false);
            setPlayingUrl('');
        }
    }

    return (
        <div className="track-container">
            <h1 className="track-container__title">CD 1</h1>
            <ul className="track-container__list">
                {props.resultado.map( (track) => {
                    console.log(track)
                    return (
                        <li className="track-container__list--track">
                            <div className="track-container__list--track--name">
                                <h2>Song: {track.name}</h2>
                                <button onClick={() => playTrack(track.preview_url)}>
                                { playingUrl === track.preview_url ? ( <i className="far fa-pause-circle"></i> ) : ( <i className="far fa-play-circle"></i> )
                                }
                                    
                                </button>
                            </div>
                            <div className="track-container__list--track--fav">
                                <Fav id={track.id}/>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    ); 
}

export default Track;