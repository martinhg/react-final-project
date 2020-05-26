import React from 'react';
import './AlbumPage.scss';
import Track from '../../components/Track/Track';

const AlbumPage = (props) => {
    return (
        <main className="album-container">
            <section className="album-container__album-info">
                <div className="album-container__album-info__image">
                    <img className="album-container__album-info__image--img" src={props.album.images[1].url} alt="Imagen"/>
                </div>
                <div className="album-container__album-info__info">
                    <h1 className="album-container__album-info__info--title">{props.album.name}</h1>
                    <h2 className="album-container__album-info__info--label">{props.album.label}</h2>
                </div>
            </section>
            <section className="album-container__tracks">
                <Track resultado={props.tracks}/>
            </section>
        </main>
    );
}

export default AlbumPage;