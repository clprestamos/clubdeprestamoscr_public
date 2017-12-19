import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import LoanApproved from './loanApproved';

const Dashboard = props => (
  <div>
    <Switch>
      <Route
        exact
        path="/cliente/dashboard"
        render={() => (
          <div>{props.authData.data.name} <Link to="/logout">Logout</Link></div>
        )}
      />
      <Route
        path="/cliente/prestamos-aprobados"
        component={LoanApproved}
      />
      <Redirect from="*" to="/cliente/dashboard" />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
