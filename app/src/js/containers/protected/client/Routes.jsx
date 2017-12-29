import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import LoanApproved from './loanApproved';
import LoanRequest from './loanRequest';
import Profile from './Profile';

const Routes = props => (
  <Switch>
    <Route
      exact
      path={`${props.match.path}/dashboard`}
      render={() => <Home authData={props.authData} />}
    />
    <Route
      path={`${props.match.path}/perfil`}
      component={Profile}
    />
    <Route
      path={`${props.match.path}/prestamo-aprobado`}
      component={LoanApproved}
    />
    <Route
      path={`${props.match.path}/solicitud-prestamo`}
      component={LoanRequest}
    />
    <Redirect from="*" to={`${props.match.path}/dashboard`} />
  </Switch>
);

export default Routes;
