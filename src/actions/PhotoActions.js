import { browserHistory } from 'react-router';
import {
  GET_LOCAL_ID,
  ROTATE_PHOTO,
  SAVE_REMOTE_PHOTO,
  UPDATE_USERNAME,
  UPDATE_MOBILE,
  UPLOADING_STATUS,
} from 'constants';
import wx from 'weixin-js-sdk';


export function updateName(value) {
  return {
    type: UPDATE_USERNAME,
    payload: value,
  };
}

export function updateMobile(value) {
  return {
    type: UPDATE_MOBILE,
    payload: value,
  };
}

function getLocalId(localId) {
  return {
    type: GET_LOCAL_ID,
    payload: {
      localId,
    },
  };
}

function saveRemotePhoto(url) {
  return {
    type: SAVE_REMOTE_PHOTO,
    payload: {
      url,
    },
  };
}

export function rotatePhoto() {
  return {
    type: ROTATE_PHOTO,
  };
}

export function choosePhoto() {
  return (dispatch) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const localIds = res.localIds;
        if (localIds) {
          dispatch(getLocalId(localIds[0]));
          browserHistory.push('/edit');
        }
      },
    });
  };
}

function beginUploading() {
  return {
    type: UPLOADING_STATUS,
    payload: true,
  };
}

function endUploading() {
  return {
    type: UPLOADING_STATUS,
    payload: false,
  };
}

export function submitPhoto() {
  return (dispatch, getState) => {
    const { photo: { name, mobile, localId } } = getState();
    // todo: upload to weixin server
    dispatch(beginUploading());
    wx.uploadImage({
      localId,
      isShowProgressTips: 1, // 默认为1，显示进度提示
      success: (res) => {
        const serverId = res.serverId; // 返回图片的服务器端ID
        dispatch(beginUploading());
        fetch(`${__API_ROOT__}/upload`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            mobile,
            serverId,
          }),
        })
        .then(response => response.json())
        .then((data) => {
          dispatch(endUploading());
          dispatch(saveRemotePhoto(`${__API_ROOT__}${data.image}`));
          browserHistory.push('/export');
        })
        .catch(() => dispatch(endUploading()));
      },
    });
  };
}

export function sharePhoto() {
  // todo
}
