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

export function uploadAvatar(avatar) {
  return (dispatch, getState) => {
    dispatch(uploadFileInit());
    try {
      const { userId } = getState().user.data;
      const formData = new FormData();
      formData.append('fileName', avatar.file);
      formData.append('userId', userId);
      service.post({
        endpoint: '/upload',
        payload: formData,
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

export function changeAvatar({ avatar }) {
  return (dispatch, getState) => {
    dispatch(uploadFileInit());
    try {
      const { userId } = getState().user.data;
      service.patch({
        endpoint: '/upload',
        payload: {
          userId,
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
