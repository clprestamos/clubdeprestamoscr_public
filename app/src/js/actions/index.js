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

export function changeCurrentStep(currentStep) {
  return (dispatch) => {
    let payload = {
      currentStep,
    };
    if (currentStep === 1) {
      payload = {
        ...payload,
        step1: {
          isActive: true,
        },
        step2: {
          isActive: false,
        },
        step3: {
          isActive: false,
        },
      };
    } else if (currentStep === 2) {
      payload = {
        ...payload,
        step1: {
          isActive: false,
        },
        step2: {
          isActive: true,
        },
        step3: {
          isActive: false,
        },
      };
    } else if (currentStep === 3) {
      payload = {
        ...payload,
        step1: {
          isActive: false,
        },
        step2: {
          isActive: false,
        },
        step3: {
          isActive: true,
        },
      };
    }
    return dispatch({
      type: types.CHANGE_CURRENT_STEP,
      payload,
    });
  };
}
