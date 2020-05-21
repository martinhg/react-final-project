import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';

//Pages
import HomePageContainer from './pages/HomePage/HomePageContainer';
import ArtistsPageContainer from './pages/ArtistsPage/ArtistsPageContainer';
import ArtistPageContainer from './pages/ArtistPage/ArtistPageContainer';
import AlbumPageContainer from './pages/AlbumPage/AlbumPageContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component= { HomePageContainer } />
          <Route exact path="/search/:search" component= { ArtistsPageContainer } />
          <Route exact path="/artist/:artistId" component= { ArtistPageContainer } />
          <Route exact path="/album/:albumId" component= { AlbumPageContainer } />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
