import { browserHistory } from 'react-router';
import {
  GET_LOCAL_ID,
  ROTATE_PHOTO,
  SAVE_REMOTE_PHOTO,
  UPDATE_USERNAME,
  UPDATE_MOBILE,
  UPLOADING_STATUS,
  SHOWS_SHARE_OVERLAY,
} from 'constants';
import wx from 'weixin-js-sdk';
import 'isomorphic-fetch';
import es6Promise from 'es6-promise';

es6Promise.polyfill();


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
        .then(({ image: imageURI }) => {
          dispatch(endUploading());
          dispatch(saveRemotePhoto(`${__API_ROOT__}${imageURI}`));
          browserHistory.push('/export');

          const imageName = imageURI.substr(0, imageURI.lastIndexOf('.'));
          const shareLink = `http://guojian.daguchuangyi.com${imageName}`;
          wx.onMenuShareAppMessage({
            link: shareLink, // 分享链接
          });
          wx.onMenuShareTimeline({
            link: shareLink, // 分享链接
          });
        })
        .catch(() => dispatch(endUploading()));
      },
    });
  };
}

export function sharePhoto() {
  return {
    type: SHOWS_SHARE_OVERLAY,
    payload: true,
  };
}

export function hideOverlay() {
  return {
    type: SHOWS_SHARE_OVERLAY,
    payload: false,
  };
}
