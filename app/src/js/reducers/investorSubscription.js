import * as types from '../constants';

const initialState = {
  letterStep: 'uno',
  currentStep: 1,
  name: '',
  lastNames: '',
  identification: 0,
  phone: 0,
  aditionalPhone: 0,
  email: '',
  step1: {
    isActive: true,
    isComplete: false,
  },
  step2: {
    isActive: false,
    isComplete: false,
  },
};

function InvestorSubscription(state = initialState, action) {
  switch (action.type) {
    case types.INVESTOR_CHANGE_CURRENT_STEP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default InvestorSubscription;
