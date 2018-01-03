import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ClientHome from './client/Home';
import LoanApproved from './client/LoanApproved';
import LoanRequest from './client/LoanRequest';
import ClientProfile from './client/Profile';
import Score from './client/Score';

import InvestorHome from './investor/Home';
import InvestorProfile from './investor/Profile';
import Opportunities from './investor/Opportunities';

import Loan from './loan/Loan';

const Routes = (props) => {
  const clientRoutes = [
    {
      exact: true,
      path: '/cliente/dashboard',
      component: () => <ClientHome authData={props.authData} />,
    },
    {
      path: '/cliente/prestamo-aprobado',
      component: () => <LoanApproved />,
    },
    {
      path: '/cliente/solicitud-credito',
      component: () => <LoanRequest />,
    },
    {
      path: '/cliente/perfil',
      component: () => <ClientProfile />,
    },
    {
      path: '/cliente/score-crediticio',
      component: () => <Score />,
    },
  ];
  const investorRoutes = [
    {
      exact: true,
      path: '/inversionista/dashboard',
      component: () => <InvestorHome authData={props.authData} />,
    },
    {
      path: '/inversionista/perfil',
      component: () => <InvestorProfile />,
    },
    {
      path: '/inversionista/oportunidades/:type?',
      component: () => <Opportunities />,
    },
    {
      path: '/inversionista/prestamo/:loanId',
      component: () => <Loan match={props.match} />,
    },
  ];
  let routes = [];
  if (props.authData.data.roleId === 1) {
    routes = clientRoutes;
  } else if (props.authData.data.roleId === 2) {
    routes = investorRoutes;
  }
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index} // eslint-disable-line
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
