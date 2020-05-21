import React from 'react';
import { Link } from 'react-router-dom';
import './ArtistPage.scss';
import Card from '../../components/Card/Card.js';
import imagen from '../../assets/user.png';

const ArtistPage = (props) => {
    // console.log(props.albums.items);
    
    return (
        <div className="artist-container">
            <section className="artist-container__artist-info">
                <div className="artist-container__artist-info__image">
                    <img className="artist-container__artist-info__image--img" src={imagen} alt="Imagen"/>
                </div>
                <div className="artist-container__artist-info__info">
                    <h1 className="artist-container__artist-info__info--name">{props.artist.name}</h1>
                    <h2 className="artist-container__artist-info__info--genre">{props.artist.genres}</h2>
                </div>
            </section>
            <section className="artist-container__albums">
                <ul className="artist-container__albums--list">
                    {props.albums.map( (album) => {
                        return (
                            <li key={album.id} className="artist-container__albums--list--element">
                                <Link to={`/album/${album.id}`}>
                                    <Card resultado={album}/>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}

export default ArtistPage;