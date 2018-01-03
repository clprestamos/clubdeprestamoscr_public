import React from 'react';
import { connect } from 'react-redux';
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
import Faqs from './containers/Faqs';
import RequestLoan from './containers/RequestLoan';
import InvestorRegister from './containers/InvestorRegister';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Dashboard from './containers/protected/Dashboard';
import ChangePassword from './containers/ChangePassword';

let isAuthenticated = false;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    isAuthenticated ? (
      <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);
const Routes = (props) => {
  isAuthenticated = props.isAuth;
  return (
    <Router>
      <div>
        <Header
          isHomeMenu={props.isHomeMenu}
          isAuth={props.isAuth}
          hide={props.isHomeMenuHidden}
        />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/comofunciona" component={HowWorks} />
          <Route path="/acercadenosotros" component={AboutUs} />
          <Route path="/preguntasfrecuentes" component={Faqs} />
          <Route path="/prestamos" component={RequestLoan} />
          <Route path="/invierta" component={InvestorRegister} />
          <Route path="/login/:payment?" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/cambiar-password/:passwordKey" component={ChangePassword} />
          <PrivateRoute path="/cliente/:section?" component={Dashboard} />
          <PrivateRoute path="/inversionista/:section?/:loanId?" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer hide={props.isHomeMenuHidden} />
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  isHomeMenu: state.main.isHomeMenu,
  isHomeMenuHidden: state.main.isHomeMenuHidden,
  isAuth: state.user.isAuth,
  logout: state.user.logout,
});

export default connect(mapStateToProps)(Routes);
