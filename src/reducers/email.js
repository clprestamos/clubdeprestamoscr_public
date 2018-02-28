import * as types from '../constants';

const initialState = {
  isLoading: false,
  response: {},
};

function Email(state = initialState, action) {
  switch (action.type) {
    case types.SEND_EMAIL_INIT:
    case types.SEND_EMAIL_ERROR:
    case types.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default Email;
