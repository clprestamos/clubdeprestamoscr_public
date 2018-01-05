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

export function toggleMenuHideState(isHomeMenuHidden) {
  return dispatch => dispatch({
    type: types.TOGGLE_MENU_HIDE_STATE,
    payload: {
      isHomeMenuHidden,
    },
  });
}

export function investorChangeCurrentStep(currentStep) {
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
      };
    }
    return dispatch({
      type: types.INVESTOR_CHANGE_CURRENT_STEP,
      payload,
    });
  };
}
