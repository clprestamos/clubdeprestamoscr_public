import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import LoanApproved from './LoanApproved';
import LoanRequest from './LoanRequest';
import Profile from './Profile';
import Score from './Score';

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
      path={`${props.match.path}/solicitud-credito`}
      component={LoanRequest}
    />
    <Route
      path={`${props.match.path}/score-crediticio`}
      component={Score}
    />
    <Redirect from="*" to={`${props.match.path}/dashboard`} />
  </Switch>
);

export default Routes;
