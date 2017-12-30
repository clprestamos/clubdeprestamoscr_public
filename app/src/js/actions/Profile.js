import _ from 'lodash';
import * as types from '../constants';
import * as service from '../service';

export function getZipCodeInit() {
  return {
    type: types.GET_PROFILE_ZIPCODE_INIT,
    payload: {
      isLoading: true,
      error: null,
    },
  };
}
export function getZipCodeError(error) {
  return {
    type: types.GET_PROFILE_ZIPCODE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function getZipCodeSuccess(zipCode) {
  return {
    type: types.GET_PROFILE_ZIPCODE_SUCCESS,
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
      endpoint: `/getZipcode/${getState().clientProfile.province}/${getState().clientProfile.canton}/${getState().clientProfile.district}`,
    })
      .then((response) => {
        dispatch(getZipCodeSuccess(response.body[0].zipCode));
      })
      .catch(error => dispatch(getZipCodeError(error)));
  };
}
export function getUserProfileInit() {
  return {
    type: types.GET_USER_PROFILE_INIT,
    payload: {
      isLoading: true,
      error: null,
    },
  };
}
export function getUserProfileError(error) {
  return {
    type: types.GET_USER_PROFILE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function getUserProfileSuccess(data) {
  return {
    type: types.GET_USER_PROFILE_SUCCESS,
    payload: {
      isLoading: false,
      error: null,
      ...data,
    },
  };
}
export function clearUserProfile() {
  return {
    type: types.CLEAR_USER_PROFILE,
  };
}
export function getUserProfile() {
  return (dispatch, getState) => {
    dispatch(getUserProfileInit());
    const id = getState().user.data.userId;
    service.get({
      endpoint: `/users/${id}`,
    })
      .then((response) => {
        const {
          name,
          lastName,
          email,
          nationality,
          identification,
          phone,
          cellphone,
          address,
          province,
          canton,
          district,
          zipCode,
          referencePhone,
          relativePhone,
          bank,
          clientAccount,
          iban,
        } = response.body[0];
        dispatch(getUserProfileSuccess({
          name,
          lastName,
          email,
          nationality,
          identification,
          phone,
          cellphone,
          address,
          province,
          canton,
          district,
          zipCode,
          referencePhone,
          relativePhone,
          bank,
          clientAccount,
          iban,
        }));
      })
      .catch(error => dispatch(getUserProfileError(error)));
  };
}
export function editClientProfile({ field, value }) {
  return {
    type: types.EDIT_CLIENT_PROFILE,
    payload: {
      field,
      value,
    },
  };
}
export function saveClientProfileInit() {
  return {
    type: types.SAVE_CLIENT_PROFILE_INIT,
    payload: {
      isLoading: true,
      error: null,
    },
  };
}
export function saveClientProfileError(error) {
  return {
    type: types.SAVE_CLIENT_PROFILE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function saveClientProfileSuccess(data) {
  return {
    type: types.SAVE_CLIENT_PROFILE_SUCCESS,
    payload: {
      isLoading: false,
      ...data,
    },
  };
}
export function saveClientProfile() {
  return (dispatch, getState) => {
    dispatch(saveClientProfileInit());
    const {
      name,
      lastName,
      email,
      nationality,
      identification,
      cellphone,
      address,
      province,
      canton,
      district,
      zipCode,
      referencePhone,
      relativePhone,
      bank,
      clientAccount,
      iban,
    } = getState().clientProfile;
    let payload = {
      name,
      lastName,
      email,
      nationality,
      identification,
      cellphone,
      address,
      province,
      canton,
      district,
      zipCode,
      referencePhone,
      relativePhone,
      bank,
      clientAccount,
      iban,
    };
    payload = _.pickBy(payload, _.identity);
    const { userId } = getState().user.data;
    service.patch({
      endpoint: `/users/${userId}`,
      payload,
    })
      .then((response) => {
        dispatch(saveClientProfileSuccess(response.body));
      })
      .catch(error => dispatch(saveClientProfileError(error)));
  };
}
