import { createReducer } from 'utils';
import {
  GET_LOCAL_ID,
  ROTATE_PHOTO,
  SAVE_REMOTE_PHOTO,
  UPDATE_USERNAME,
  UPDATE_MOBILE,
  UPLOADING_STATUS,
  SHOWS_SHARE_OVERLAY,
} from 'constants';


const initialState = {
  localId: '',
  remoteUrl: '',
  rotation: 0,
  userName: '',
  mobile: '',
  isUploading: false,
  showsShareOverlay: false,
};

export default createReducer(initialState, {
  [GET_LOCAL_ID]: (state, payload) => ({ ...state, localId: payload.localId }),
  [SAVE_REMOTE_PHOTO]: (state, payload) => ({ ...state, remoteUrl: payload.url }),
  [ROTATE_PHOTO]: state => ({ ...state, rotation: (state.rotation + 90) % 360 }),
  [UPDATE_USERNAME]: (state, payload) => ({ ...state, userName: payload }),
  [UPDATE_MOBILE]: (state, payload) => ({ ...state, mobile: payload }),
  [UPLOADING_STATUS]: (state, payload) => ({ ...state, isUploading: payload }),
  [SHOWS_SHARE_OVERLAY]: (state, payload) => ({ ...state, showsShareOverlay: payload }),
});
