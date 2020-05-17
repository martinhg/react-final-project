import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';

//Pages
import HomePageContainer from './pages/HomePage/HomePageContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component= { HomePageContainer } />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
