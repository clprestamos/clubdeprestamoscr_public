import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import ClientHome from './client/Home';
import LoanApproved from './client/LoanApproved';
import LoanRequest from './client/LoanRequest';
import ClientProfile from './client/Profile';
import Score from './client/Score';

import InvestorHome from './investor/Home';
import InvestorProfile from './investor/Profile';
import Opportunities from './investor/Opportunities';
import MyInvests from './investor/MyInvests';

import Loan from './loan/Loan';

const Routes = props => (
  <div>
    { props.authData.data.roleId === 1 ? (
      <Switch>
        <Route exact path="/" component={ClientHome} />
        <Route path="/cliente/dashboard" component={ClientHome} />
        <Route path="/cliente/prestamo-aprobado" component={LoanApproved} />
        <Route path="/cliente/solicitud-credito" component={LoanRequest} />
        <Route path="/cliente/perfil" component={ClientProfile} />
        <Route path="/cliente/score-crediticio" component={Score} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={InvestorHome} />
        <Route path="/inversionista/dashboard" component={InvestorHome} />
        <Route path="/inversionista/perfil" component={InvestorProfile} />
        <Route path="/inversionista/oportunidades/:type?" component={Opportunities} />
        <Route path="/inversionista/mis-inversiones/:type?" component={MyInvests} />
        <Route path="/inversionista/prestamo/:loanId" component={Loan} />
        <Redirect from="*" to="/" />
      </Switch>
    )}
  </div>
);

const mapStateToProps = state => ({
  authData: state.user,
  userProfile: state.userProfile,
});

export default withRouter(connect(mapStateToProps)(Routes));
