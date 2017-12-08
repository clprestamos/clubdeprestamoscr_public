import { combineReducers } from 'redux';

import main from './main';
import clientSubscription from './clientSubscription';
import investorSubscription from './investorSubscription';

const rootReducer = combineReducers({
  main,
  clientSubscription,
  investorSubscription,
});

export default rootReducer;
