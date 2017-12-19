import * as types from '../constants';

const initialState = {
  isLoading: false,
  isHomeMenu: false,
  isHomeMenuHidden: false,
};

function Main(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_INIT:
    case types.LOADING_SUCCESS:
    case types.TOGGLE_MENU_STATE:
    case types.TOGGLE_MENU_HIDE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default Main;
