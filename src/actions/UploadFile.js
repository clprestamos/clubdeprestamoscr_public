import * as types from '../constants';
import * as service from '../service';

export function uploadFileInit() {
  return {
    type: types.UPLOAD_FILE_INIT,
    payload: {
      isLoading: true,
      error: null,
    },
  };
}

export function uploadFileError(error) {
  return {
    type: types.UPLOAD_FILE_ERROR,
    payload: {
      isLoading: false,
      error,
    },
  };
}

export function uploadFileSuccess(avatar) {
  return {
    type: types.UPLOAD_FILE_SUCCESS,
    payload: {
      isLoading: false,
      error: null,
      avatar,
    },
  };
}

export function uploadFile({ avatar }) {
  return (dispatch, getState) => {
    dispatch(uploadFileInit());
    try {
      service.patch({
        endpoint: `/users/${getState().user.data.userId}`,
        payload: {
          avatar,
        },
      })
        .then((response) => {
          dispatch(uploadFileSuccess(response.body[0].avatar));
        })
        .catch(error => dispatch(uploadFileError(error)));
    } catch (error) {
      dispatch(uploadFileError(error));
    }
  };
}
