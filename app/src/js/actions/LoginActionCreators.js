import * as types from '../constants';
import * as service from '../service';

export function loginInit() {
  return {
    type: types.LOGIN_INIT,
    payload: {
      isLoading: true,
    },
  };
}
export function loginSuccess(data) {
  const isClient = data.roleId === 'client';
  const isInvestor = data.roleId === 'investor';
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      isLoading: false,
      isAuth: true,
      isClient,
      isInvestor,
      data,
    },
  };
}
export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      isLoading: false,
      isAuth: false,
      error: error.message,
    },
  };
}
export function login({ username, password }) {
  return (dispatch) => {
    service.post({
      endpoint: 'auth/login',
      payload: {
        email: username,
        password,
      },
    })
      .then((response) => {
        const { body } = response;
        const { results } = body;
        const { userInfo } = results;
        const { token } = results;
        const {
          name,
          lastName,
          email,
          roleId,
        } = userInfo;
        const data = {
          name,
          lastName,
          email,
          roleId,
        };
        service.setToken(token, data);
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
export function logout() {
  service.removeToken();
  return dispatch => dispatch({
    type: types.LOGOUT,
  });
}
