import wx from 'weixin-js-sdk';

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
  return {
    debug: __DEV__,
    appId: 'wx5285007f95adef29', // 必填，公众号的唯一标识
    timestamp: 1474212704, // 必填，生成签名的时间戳
    nonceStr: 'qBZ3uopks1ZcksF', // 必填，生成签名的随机串
    signature: 'c9476e906fe63c23f4ff538095eb0c6dbe467224', // 必填，签名，见附录1
    jsApiList: [
      'chooseImage',
      'uploadImage',
      'downloadImage',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
    ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  };
}

export function loadWxConfig() {
  wx.config(getWxConfig());
}
