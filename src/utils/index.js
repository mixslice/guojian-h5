import wx from 'weixin-js-sdk';
import 'isomorphic-fetch';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    const newAcc = acc;
    newAcc[constant] = constant;
    return newAcc;
  }, {});
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
    ? reducer(state, action.payload)
    : state;
  };
}

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

function getWxConfig() {
  return fetch('http://wechatapi.daguchuangyi.com/signatureTest', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: __SITE_URL__,
    }),
  })
  .then(response => response.json());
}

export function loadWxConfig() {
  getWxConfig().then(({
    appId, signature, timestamp, nonceStr,
  }) => {
    wx.config({
      debug: __DEV__,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: [
        'chooseImage',
        'uploadImage',
        'downloadImage',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
      ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
  });
}
