import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';

import Main from './containers/Main';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
);

export default Routes;
