import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoanApproved from './loanApproved';

const Routes = props => (
  <Switch>
    <Route
      exact
      path="/cliente/dashboard"
      render={() => (
        <div>{props.authData.data.name}</div>
      )}
    />
    <Route
      path="/cliente/prestamos-aprobados"
      component={LoanApproved}
    />
    <Redirect from="*" to="/cliente/dashboard" />
  </Switch>
);

export default Routes;
