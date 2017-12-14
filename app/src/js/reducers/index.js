import { combineReducers } from 'redux';

import main from './main';
import clientSubscription from './clientSubscription';
import investorSubscription from './investorSubscription';
import recaptcha from './recaptcha';

const rootReducer = combineReducers({
  main,
  recaptcha,
  clientSubscription,
  investorSubscription,
});

export default rootReducer;
