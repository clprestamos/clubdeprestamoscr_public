/* eslint-disable */

import includes from 'lodash/includes';
import * as service from '../service';
import {
  LOGIN_SUCCESS,
  EDIT_CLIENT_PROFILE,
  GET_USER_PROFILE_INIT,
  SAVE_CLIENT_PROFILE_INIT,
} from '../constants';
import { logout } from '../actions/Login';

export const checkSessionStatusMiddleware = store => next => action => {
  const checkSessionInActions = [
    'LOGIN_SUCCESS',
    'EDIT_CLIENT_PROFILE',
    'GET_USER_PROFILE_INIT',
    'SAVE_CLIENT_PROFILE_INIT',
  ];

  const checkSession = includes(checkSessionInActions, action.type);
  if (checkSession) {
    const isValidToken = service.validateToken();
    if (!isValidToken) {
      return store.dispatch(logout());
    }
  }

  return next(action);

};
