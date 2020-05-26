import React from 'react';
import './HomePage.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const HomePage = () => {
    return (
        <main className="home-page-container">
            <section className="home-page-container__welcome-section">
                <h1 className="home-page-container__welcome-section--title">Welcome to <br/>
                    <span className="home-page-container__welcome-section--span">Spotisearch</span>
                </h1>
                <p className="home-page-container__welcome-section--description">Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
            </section>
            <section className="home-page-container__searchbox-section">
                <SearchBox />
            </section>
        </main>
    );
}

export default HomePage;