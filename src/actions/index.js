import * as types from '../constants';
import * as service from '../service';

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
export function sendEmailInit() {
  return {
    type: types.SEND_EMAIL_INIT,
    payload: { isLoading: true },
  };
}
export function sendEmailError(error) {
  return {
    type: types.SEND_EMAIL_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function sendEmailSuccess(response) {
  return {
    type: types.SEND_EMAIL_SUCCESS,
    payload: {
      isLoading: false,
      response,
    },
  };
}
export function sendEmail(emailData) {
  return (dispatch) => {
    dispatch(sendEmailInit());
    return service.post({
      endpoint: '/sendmailto',
      payload: emailData,
    })
      .then((response) => {
        if (response.status === 250) {
          return dispatch(sendEmailSuccess(response.body));
        }
        return dispatch(sendEmailError(response.body));
      })
      .catch(error => dispatch(sendEmailError(error)));
  };
}
