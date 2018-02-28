import _ from 'lodash';
import * as types from '../constants';
import * as service from '../service';
import * as GeneralActions from './';

export function clearErrorSubscription() {
  return {
    type: types.CLEAR_ERROR_SUBSCRIPTION,
  };
}
export function clearClientSubscription() {
  return {
    type: types.CLEAR_CLIENT_SUBSCRIPTION,
  };
}
export function getZipCodeInit() {
  return {
    type: types.GET_ZIPCODE_INIT,
    payload: {
      isLoading: true,
    },
  };
}
export function getZipCodeError(error) {
  return {
    type: types.GET_ZIPCODE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function getZipCodeSuccess(zipCode) {
  return {
    type: types.GET_ZIPCODE_SUCCESS,
    payload: {
      isLoading: false,
      zipCode,
    },
  };
}
export function getZipCode() {
  return (dispatch, getState) => {
    dispatch(getZipCodeInit());
    service.get({
      endpoint: `/getZipcode/${getState().clientSubscription.province}/${getState().clientSubscription.canton}/${getState().clientSubscription.district}`,
    })
      .then((response) => {
        dispatch(getZipCodeSuccess(response.body[0].zipCode));
      })
      .catch(error => dispatch(getZipCodeError(error)));
  };
}
export function registerNewClientInit() {
  return {
    type: types.ADD_NEW_CLIENT_INIT,
    payload: {
      isLoading: true,
      newClient: {
        saved: false,
      },
    },
  };
}
export function registerNewClientError(error) {
  return {
    type: types.ADD_NEW_CLIENT_ERROR,
    payload: {
      isLoading: false,
      error,
      newClient: {
        saved: false,
      },
    },
  };
}
export function registerNewClientSuccess() {
  return {
    type: types.ADD_NEW_CLIENT_SUCCESS,
    payload: {
      isLoading: false,
      newClient: {
        saved: true,
      },
    },
  };
}
export function registerNewClient({ userId, loanId }) {
  return (dispatch) => {
    dispatch(registerNewClientInit());
    service.post({
      endpoint: '/clients',
      payload: {
        userId,
        loanId,
      },
    })
      .then(() => {
        dispatch(registerNewClientSuccess());
      })
      .catch(error => dispatch(registerNewClientError(error)));
  };
}
export function registerNewLoanInit() {
  return {
    type: types.ADD_NEW_LOAN_INIT,
    payload: {
      isLoading: true,
      newLoan: {
        saved: false,
      },
    },
  };
}
export function registerNewLoanError(error) {
  return {
    type: types.ADD_NEW_LOAN_ERROR,
    payload: {
      isLoading: false,
      error,
      newLoan: {
        saved: false,
      },
    },
  };
}
export function registerNewLoanSuccess() {
  return {
    type: types.ADD_NEW_LOAN_SUCCESS,
    payload: {
      isLoading: false,
      newLoan: {
        saved: true,
      },
    },
  };
}
export function registerNewLoan(userId) {
  return (dispatch, getState) => {
    dispatch(registerNewLoanInit());
    const {
      amount,
      term,
      reason,
      name,
      lastName,
      email,
    } = getState().clientSubscription;
    service.post({
      endpoint: '/loans',
      payload: {
        amount,
        term,
        reason,
        stateId: 1,
        requestLoanDate: new Date(),
      },
    })
      .then((response) => {
        dispatch(registerNewLoanSuccess());
        dispatch(registerNewClient({
          userId,
          loanId: response.body.id,
        }));
        const { REACT_APP_HOST, REACT_APP_ADMIN_EMAIL, REACT_APP_ADMIN_HOST } = process.env;
        const emailData = {
          message: `Bienvenido Señor ${name} ${lastName}\nDe click en el siguiente link ${REACT_APP_HOST}/login para ver el estado de su préstamo.\nPor favor complete la información en su perfil.`,
          sender: email,
          subject: 'Club de Préstamos - Bienvenido',
        };
        dispatch(GeneralActions.sendEmail(emailData));
        const emailAdminData = {
          message: `Bienvenido Señor ${name} ${lastName}\nDe click en el siguiente link ${REACT_APP_ADMIN_HOST}/dashboard/prestamos/${response.body.id} para ver el estado del préstamo.`,
          sender: REACT_APP_ADMIN_EMAIL,
          subject: 'Club de Préstamos - Nuevo Cliente',
        };
        dispatch(GeneralActions.sendEmail(emailAdminData));
      })
      .catch(error => dispatch(registerNewLoanError(error)));
  };
}
export function registerNewUserInit() {
  return {
    type: types.ADD_NEW_USER_INIT,
    payload: {
      isLoading: true,
      newUser: {
        saved: false,
      },
    },
  };
}
export function registerNewUserError(error) {
  return {
    type: types.ADD_NEW_USER_ERROR,
    payload: {
      isLoading: false,
      error,
      newUser: {
        saved: false,
      },
    },
  };
}
export function registerNewUserSuccess() {
  return {
    type: types.ADD_NEW_USER_SUCCESS,
    payload: {
      isLoading: false,
      newUser: {
        saved: true,
      },
    },
  };
}
export function registerUserClient() {
  return (dispatch, getState) => {
    dispatch(registerNewUserInit());
    const {
      name,
      lastName,
      identification,
      nationality,
      phone,
      referencePhone,
      relativePhone,
      cellphone,
      email,
      address,
      province,
      canton,
      district,
      zipCode,
      password,
      sex,
      home,
      maritalStatus,
      otherProperties,
      hasVehicle,
      jobTime,
      jobSector,
      jobCategory,
      academicLevel,
    } = getState().clientSubscription;
    service.post({
      endpoint: '/users',
      payload: {
        name,
        lastName,
        identification,
        nationality,
        phone,
        referencePhone,
        relativePhone,
        cellphone,
        email,
        address,
        province,
        canton,
        district,
        zipCode,
        password,
        sex,
        home,
        maritalStatus,
        otherProperties,
        hasVehicle,
        jobTime,
        jobSector,
        jobCategory,
        academicLevel,
        roleId: 1,
        signupDate: new Date(),
        isActive: true,
      },
    })
      .then((response) => {
        dispatch(registerNewUserSuccess());
        return response.body[0].id;
      })
      .then((userId) => {
        dispatch(registerNewLoan(userId));
      })
      .catch(error => dispatch(registerNewUserError(error.status)));
  };
}
export function setClientInformation({ field, value }) {
  if (field === 'identification') {
    if (!_.isNaN(value) && value.length === 9) {
      const province = `${_.chain(value).split('').first().value()}-`;
      const folio = `${_.chain(value).split('').slice(1, 5).join('')
        .value()}-`;
      const consecutive = `${_.chain(value).split('').slice(5, 9).join('')
        .value()}`;
      return dispatch => dispatch({
        type: types.SET_CLIENT_INFORMATION,
        payload: {
          field,
          value: `${province}${folio}${consecutive}`,
        },
      });
    }
  }
  if (/(p|P)hone/.test(field)) {
    return dispatch => dispatch({
      type: types.SET_CLIENT_INFORMATION,
      payload: {
        field,
        value: _.replace(value, '-', ''),
      },
    });
  }
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
    } else if (currentStep === 4) {
      type = types.COMPLETE_CLIENT_STEP_FOUR;
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
        step4: {
          ...getState().clientSubscription.step4,
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
        step4: {
          ...getState().clientSubscription.step4,
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
        step4: {
          ...getState().clientSubscription.step4,
          isActive: false,
        },
      };
    } else if (currentStep === 4) {
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
          isActive: false,
        },
        step4: {
          ...getState().clientSubscription.step4,
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
