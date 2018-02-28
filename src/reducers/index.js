import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main';
import clientSubscription from './clientSubscription';
import investorSubscription from './investorSubscription';
import recaptcha from './recaptcha';
import user from './user';
import forgotPassword from './forgotPassword';
import contactUs from './contactUs';
import locales from './locales';
import userProfile from './userProfile';
import loan from './loan';
import opportunities from './opportunities';
import myinvests from './myinvests';
import email from './email';

export default combineReducers({
  routing: routerReducer,
  main,
  user,
  email,
  recaptcha,
  forgotPassword,
  clientSubscription,
  investorSubscription,
  contactUs,
  locales,
  userProfile,
  loan,
  opportunities,
  myinvests,
});
