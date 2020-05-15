import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';

//Pages

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
