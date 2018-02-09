import _ from 'lodash';
import * as types from '../constants';
import * as service from '../service';
import * as Locales from './Locales';

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
      endpoint: `/getZipcode/${getState().userProfile.province}/${getState().userProfile.canton}/${getState().userProfile.district}`,
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
export function getUserProfile(userId) {
  return (dispatch) => {
    dispatch(getUserProfileInit());
    try {
      service.get({
        endpoint: `/users/${userId}`,
      })
        .then((response) => {
          dispatch(Locales.getProvinces());
          dispatch(Locales.getCantons(response.body[0].province));
          dispatch(Locales.getDistricts(response.body[0].province, response.body[0].canton));
          dispatch(getUserProfileSuccess(response.body[0]));
        })
        .catch(error => dispatch(getUserProfileError(error)));
    } catch (error) {
      dispatch(getUserProfileError(error));
    }
  };
}
export function editUserProfile({ field, value }) {
  if (field === 'identification') {
    if (!_.isNaN(value) && value.length === 9) {
      const province = `${_.chain(value).split('').first().value()}-`;
      const folio = `${_.chain(value).split('').slice(1, 5).join('')
        .value()}-`;
      const consecutive = `${_.chain(value).split('').slice(5, 9).join('')
        .value()}`;
      return dispatch => dispatch({
        type: types.EDIT_USER_PROFILE,
        payload: {
          field,
          value: `${province}${folio}${consecutive}`,
        },
      });
    }
  }
  if (/(p|P)hone/.test(field)) {
    return dispatch => dispatch({
      type: types.EDIT_USER_PROFILE,
      payload: {
        field,
        value: _.replace(value, '-', ''),
      },
    });
  }
  return {
    type: types.EDIT_USER_PROFILE,
    payload: {
      field,
      value,
    },
  };
}
export function saveUserProfileInit() {
  return {
    type: types.SAVE_USER_PROFILE_INIT,
    payload: {
      isLoading: true,
      error: null,
    },
  };
}
export function saveUserProfileError(error) {
  return {
    type: types.SAVE_USER_PROFILE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}
export function saveuserProfileSuccess(data) {
  return {
    type: types.SAVE_USER_PROFILE_SUCCESS,
    payload: {
      isLoading: false,
      ...data,
    },
  };
}
export function saveUserProfile() {
  return (dispatch, getState) => {
    dispatch(saveUserProfileInit());
    try {
      const { userProfile } = getState();
      const { userId } = userProfile;
      const payload = _.chain(userProfile)
        .pickBy(_.identity)
        .omit(['userId', 'isLoading', 'lastUpdate', 'roleName'])
        .value();
      service.patch({
        endpoint: `/users/${userId}`,
        payload,
      })
        .then((response) => {
          dispatch(saveuserProfileSuccess(response.body[0]));
        })
        .catch(error => dispatch(saveUserProfileError(error)));
    } catch (error) {
      dispatch(saveUserProfileError(error));
    }
  };
}
