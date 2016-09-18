import { browserHistory } from 'react-router';
import {
  GET_LOCAL_ID,
} from 'constants';
import wx from 'weixin-js-sdk';


function getLocalId(localId) {
  return {
    type: GET_LOCAL_ID,
    payload: {
      localId,
    },
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
