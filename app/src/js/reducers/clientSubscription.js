import * as types from '../constants';

const initialState = {
  letterStep: 'uno',
  currentStep: 1,
  name: '',
  lastNames: '',
  identification: 0,
  phone: 0,
  referencePhone: 0,
  familyPhone: 0,
  email: '',
  address: '',
  province: '',
  canton: '',
  district: '',
  amount: 0,
  term: '',
  reason: '',
  step1: {
    isActive: true,
    isComplete: false,
  },
  step2: {
    isActive: false,
    isComplete: false,
  },
  step3: {
    isActive: false,
    isComplete: false,
  },
};

function ClientSubscription(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_CURRENT_STEP:
    case types.LOADING_INIT:
    case types.LOADING_SUCCESS:
    case types.TOGGLE_MENU_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default ClientSubscription;
