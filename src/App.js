import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';

//Pages
import HomePageContainer from './pages/HomePage/HomePageContainer';
import Prueba from './prueba';

const App = () => {
  const [userId, setUserId] = useState(null)
  const myHeaders = {
    'Authorization': 'Bearer BQAAvn28ns10c0cayydLBypJilkcdRW7M2C64rUjw3qn-urF-3mlaH7AuoXm1WvgkZlo6bkUB8Gb0xRMpyUn2dkY_o1wWaUd2infHlZXuk-QEm6_LBzXPWomo1hhxj8L-3SeQoDuftuZvdVat9LOvlT1yHMSQmb2pT0eety-rapP5_s2rxRJSy9382sGZyKfiDIheFA-AP51Em9xYkZnYKfr-M7EF3DpIkMRoju2qxQMEG2N_imnxQ8sZLtfHKud8tEshxbjr7agYJYfURtd4_stRUu4FxNrKDx6',
    'Content-Type': 'application/json'
  }
  useEffect(() => {
    fetch('https://api.spotify.com/v1/me', {
      headers: myHeaders
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setUserId(data.id)})
    .catch(err => console.log(err))
  }, [])

  console.log(userId);
  // const getPlayList = () => {
  //   fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //     headers: myHeaders
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  // const getMyTopArtists = () => {
  //   fetch(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
  //     method: 'GET',
  //     headers: myHeaders
  //   })
  //   .then(res =>res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
//   // }
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component= { HomePageContainer } />
          <Route exact path="/search" component= { Prueba } />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
