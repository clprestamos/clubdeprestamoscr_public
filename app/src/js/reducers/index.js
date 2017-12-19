import { combineReducers } from 'redux';

import main from './main';
import clientSubscription from './clientSubscription';
import investorSubscription from './investorSubscription';
import recaptcha from './recaptcha';
import user from './user';

const rootReducer = combineReducers({
  main,
  user,
  recaptcha,
  clientSubscription,
  investorSubscription,
});

export default rootReducer;
