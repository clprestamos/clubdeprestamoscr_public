/* eslint-disable */

import includes from 'lodash/includes';
import * as service from '../service';
import {
  LOGIN_SUCCESS,
  EDIT_USER_PROFILE,
  EDIT_INVESTOR_PROFILE,
  GET_USER_PROFILE_INIT,
  GET_INVESTOR_PROFILE_INIT,
  SAVE_USER_PROFILE_INIT,
  SAVE_INVESTOR_PROFILE_INIT,
  GET_LOAN_DATA_INIT,
  GET_OPPORTUNITIES_DATA_INIT,
  SAVE_INVEST_OPPORTUNITY_INIT,
  GET_LOAN_OPPORTUNITY_INIT,
  GET_LOANS_MY_INVESTS_INIT,
} from '../constants';
import { logout } from '../actions/Login';

export const checkSessionStatusMiddleware = store => next => action => {
  const checkSessionInActions = [
    'LOGIN_SUCCESS',
    'EDIT_USER_PROFILE',
    'EDIT_INVESTOR_PROFILE',
    'GET_USER_PROFILE_INIT',
    'GET_INVESTOR_PROFILE_INIT',
    'SAVE_USER_PROFILE_INIT',
    'SAVE_INVESTOR_PROFILE_INIT',
    'GET_LOAN_DATA_INIT',
    'GET_OPPORTUNITIES_DATA_INIT',
    'SAVE_INVEST_OPPORTUNITY_INIT',
    'GET_LOAN_OPPORTUNITY_INIT',
    'GET_LOANS_MY_INVESTS_INIT',
  ];
  const checkSession = includes(checkSessionInActions, action.type);
  if (checkSession) {
    const isValidToken = service.validateToken();
    if (!isValidToken) {
      window.location.replace('/logout');
      return null;
    }
  }

  return next(action);

};
