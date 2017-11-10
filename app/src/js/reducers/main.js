import * as types from '../actions/';

const initialState = {
  isLoading: false,
};

function Main(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_INIT:
    case types.LOADING_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default Main;
