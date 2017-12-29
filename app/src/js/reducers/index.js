import { combineReducers } from 'redux';

import main from './main';
import clientSubscription from './clientSubscription';
import investorSubscription from './investorSubscription';
import recaptcha from './recaptcha';
import user from './user';
import forgotPassword from './forgotPassword';
import contactUs from './contactUs';
import locales from './locales';
import clientProfile from './clientProfile';

const rootReducer = combineReducers({
  main,
  user,
  recaptcha,
  forgotPassword,
  clientSubscription,
  investorSubscription,
  contactUs,
  locales,
  clientProfile,
});

export default rootReducer;
