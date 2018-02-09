import * as types from '../constants';

const initialState = {
  isLoading: false,
  error: null,
  avatar: null,
  name: null,
  lastName: null,
  email: null,
  nationality: null,
  identification: null,
  cellphone: null,
  phone: null,
  address: null,
  province: null,
  canton: null,
  district: null,
  zipCode: null,
  referencePhone: null,
  relativePhone: null,
  bank: null,
  clientAccount: null,
  iban: null,
  paymentId: null,
  sex: null,
  maritalStatus: null,
  home: null,
  otherProperties: true,
  jobSector: null,
  jobCategory: null,
  academicLevel: null,
  hasVehicle: true,
  jobTime: null,
};

function userProfile(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_USER_PROFILE_INIT:
    case types.SAVE_USER_PROFILE_ERROR:
    case types.SAVE_USER_PROFILE_SUCCESS:
    case types.GET_PROFILE_ZIPCODE_INIT:
    case types.GET_PROFILE_ZIPCODE_ERROR:
    case types.GET_PROFILE_ZIPCODE_SUCCESS:
    case types.GET_USER_PROFILE_INIT:
    case types.GET_USER_PROFILE_ERROR:
    case types.GET_USER_PROFILE_SUCCESS:
    case types.UPLOAD_FILE_INIT:
    case types.UPLOAD_FILE_ERROR:
    case types.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.EDIT_USER_PROFILE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case types.CLEAR_USER_PROFILE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export default userProfile;
