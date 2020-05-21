import React from 'react';
import { Link } from 'react-router-dom';
import './ArtistsPage.scss';
import Card from '../../components/Card/Card.js';


const ArtistsPage = (props) => {
    console.log(props)
    return (
        <main className="artists-page-container">
            <section className="artists-page-container__title-section">
                <h1 className="artists-page-container__title-section--title">Artists</h1>
                <h2 className="artists-page-container__title-section--sub-title">You are currently searching "{props.search}"</h2>
            </section>
            <section className="artists-page-container__artists-section">
                <ul className="artists-page-container__artists-section--list">
                    {props.artists.map( (artist) => {
                        return (
                            <li key={artist.id} className="artists-page-container__artists-section--list--element">
                                <Link to={`/artist/${artist.id}`}>
                                    <Card resultado={artist}/>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>  
    );
}

export default ArtistsPage;