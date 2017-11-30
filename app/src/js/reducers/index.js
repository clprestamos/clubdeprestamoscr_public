import { combineReducers } from 'redux';

import main from './main';
import clientSubscription from './clientSubscription';

const rootReducer = combineReducers({
  main,
  clientSubscription,
});

export default rootReducer;
