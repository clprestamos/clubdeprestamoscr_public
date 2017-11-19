import * as types from '../constants';

export function loadingInit() {
  return dispatch => dispatch({
    type: types.LOADING_INIT,
    payload: {
      isLoading: true,
    },
  });
}

export function loadingSuccess() {
  return dispatch => dispatch({
    type: types.LOADING_INIT,
    payload: {
      isLoading: false,
    },
  });
}

export function toggleMenuState(isHomeMenu) {
  return dispatch => dispatch({
    type: types.TOGGLE_MENU_STATE,
    payload: {
      isHomeMenu,
    },
  });
}
