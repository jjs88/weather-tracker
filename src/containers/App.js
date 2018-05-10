import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';
import CurrentExtended from '../components/CurrentWeather/CurrentExtended/CurrentExtended';
import Settings from './Settings/Settings';
import Dashboard from './Dashboard/Dashboard';
import PinnedDetail from './PinnedDetail/PinnedDetails';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/current" component={CurrentExtended}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/dashboard" component={Dashboard}/> 
        <Route path="/details/:city" component={PinnedDetail}/> 
      </Layout>
    );
  }
}

export default App;
