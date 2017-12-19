import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

const Dashboard = props => (
  <div>
    <Switch>
      <Route
        exact
        path="/inversionista/dashboard"
        render={() => (
          <div>{props.authData.data.username}</div>
        )}
      />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
