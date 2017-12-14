import * as types from '../constants';

export function setClientInformation({ field, value }) {
  return dispatch => dispatch({
    type: types.SET_CLIENT_INFORMATION,
    payload: {
      field,
      value,
    },
  });
}

export function stepIsDisabled({ step, isDisabled }) {
  return dispatch => dispatch({
    type: types.STEP_CLIENT_DISABLED,
    payload: {
      step,
      isDisabled,
    },
  });
}

export function clientIsCompletedStep(currentStep) {
  return (dispatch) => {
    let type = '';
    if (currentStep === 1) {
      type = types.COMPLETE_CLIENT_STEP_ONE;
    } else if (currentStep === 2) {
      type = types.COMPLETE_CLIENT_STEP_TWO;
    } else if (currentStep === 3) {
      type = types.COMPLETE_CLIENT_STEP_THREE;
    }
    return dispatch({
      type,
    });
  };
}

export function clientChangeCurrentStep(currentStep) {
  return (dispatch, getState) => {
    let payload = {
      currentStep,
    };
    if (currentStep === 1) {
      payload = {
        ...payload,
        step1: {
          ...getState().clientSubscription.step1,
          isActive: true,
        },
        step2: {
          ...getState().clientSubscription.step2,
          isActive: false,
        },
        step3: {
          ...getState().clientSubscription.step3,
          isActive: false,
        },
      };
    } else if (currentStep === 2) {
      payload = {
        ...payload,
        step1: {
          ...getState().clientSubscription.step1,
          isActive: false,
        },
        step2: {
          ...getState().clientSubscription.step2,
          isActive: true,
        },
        step3: {
          ...getState().clientSubscription.step3,
          isActive: false,
        },
      };
    } else if (currentStep === 3) {
      payload = {
        ...payload,
        step1: {
          ...getState().clientSubscription.step1,
          isActive: false,
        },
        step2: {
          ...getState().clientSubscription.step2,
          isActive: false,
        },
        step3: {
          ...getState().clientSubscription.step3,
          isActive: true,
        },
      };
    }
    return dispatch({
      type: types.CHANGE_CLIENT_CURRENT_STEP,
      payload,
    });
  };
}
