import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './containers/Main';
import HowWorks from './containers/HowWorks';
import AboutUs from './containers/AboutUs';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/comofunciona" component={HowWorks} />
        <Route path="/acercadenosotros" component={AboutUs} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;
