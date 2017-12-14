import * as types from '../constants';

const initialState = {
  letterStep: 'uno',
  currentStep: 1,
  name: '',
  lastNames: '',
  identification: '',
  phone: '',
  aditionalPhone: '',
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
    case types.CHANGE_INVESTOR_CURRENT_STEP:
      return {
        ...state,
        ...action.payload,
      };
    case types.COMPLETE_INVESTOR_STEP_ONE:
      return {
        ...state,
        step1: {
          ...state.step1,
          isComplete: true,
        },
      };
    case types.COMPLETE_INVESTOR_STEP_TWO:
      return {
        ...state,
        step2: {
          ...state.step2,
          isComplete: true,
        },
      };
    case types.SET_INVESTOR_INFORMATION:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case types.STEP_INVESTOR_DISABLED:
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          isDisabled: action.payload.isDisabled,
        },
      };
    default:
      return state;
  }
}

export default InvestorSubscription;
