import React from 'react';
import './HomePage.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const HomePage = (props) => {
    return (
        <main className="home-page-container">
            <section>
                <h1>Welcome to <br/><span>Spotisearch</span></h1>
                <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</p>
            </section>
            <section>
                <SearchBox />
            </section>
        </main>
    );
}

export default HomePage;