import * as types from '../constants';

const initialState = {
  letterStep: 'uno',
  currentStep: 1,
  name: '',
  lastName: '',
  identification: '',
  phone: '',
  referencePhone: '',
  familyPhone: '',
  email: '',
  address: '',
  province: '',
  canton: '',
  district: '',
  amount: 0,
  term: '',
  reason: '',
  password: '',
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
    case types.CHANGE_CLIENT_CURRENT_STEP:
      return {
        ...state,
        ...action.payload,
      };
    case types.COMPLETE_CLIENT_STEP_ONE:
      return {
        ...state,
        step1: {
          ...state.step1,
          isComplete: true,
        },
      };
    case types.COMPLETE_CLIENT_STEP_TWO:
      return {
        ...state,
        step2: {
          ...state.step2,
          isComplete: true,
        },
      };
    case types.COMPLETE_CLIENT_STEP_THREE:
      return {
        ...state,
        step3: {
          ...state.step3,
          isComplete: true,
        },
      };
    case types.SET_CLIENT_INFORMATION:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case types.STEP_CLIENT_DISABLED:
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

export default ClientSubscription;
