import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import LoanApproved from './loanApproved';

const Routes = props => (
  <Switch>
    <Route
      exact
      path={`${props.match.path}/dashboard`}
      render={() => <Home authData={props.authData} />}
    />
    <Route
      path={`${props.match.path}/prestamo-aprobado`}
      component={LoanApproved}
    />
    <Redirect from="*" to={`${props.match.path}/dashboard`} />
  </Switch>
);

export default Routes;
