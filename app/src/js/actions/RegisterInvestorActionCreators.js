import * as types from '../constants';

export function setInvestorInformation({ field, value }) {
  return dispatch => dispatch({
    type: types.SET_INVESTOR_INFORMATION,
    payload: {
      field,
      value,
    },
  });
}

export function stepIsDisabled({ step, isDisabled }) {
  return dispatch => dispatch({
    type: types.STEP_INVESTOR_DISABLED,
    payload: {
      step,
      isDisabled,
    },
  });
}

export function investorIsCompletedStep(currentStep) {
  return (dispatch) => {
    let type = '';
    if (currentStep === 1) {
      type = types.COMPLETE_INVESTOR_STEP_ONE;
    } else if (currentStep === 2) {
      type = types.COMPLETE_INVESTOR_STEP_TWO;
    }
    return dispatch({
      type,
    });
  };
}

export function investorChangeCurrentStep(currentStep) {
  return (dispatch, getState) => {
    let payload = {
      currentStep,
    };
    if (currentStep === 1) {
      payload = {
        ...payload,
        step1: {
          ...getState().investorSubscription.step1,
          isActive: true,
        },
        step2: {
          ...getState().investorSubscription.step2,
          isActive: false,
        },
      };
    } else if (currentStep === 2) {
      payload = {
        ...payload,
        step1: {
          ...getState().investorSubscription.step1,
          isActive: false,
        },
        step2: {
          ...getState().investorSubscription.step2,
          isActive: true,
        },
      };
    }
    return dispatch({
      type: types.CHANGE_INVESTOR_CURRENT_STEP,
      payload,
    });
  };
}
