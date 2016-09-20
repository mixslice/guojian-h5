import { createReducer } from 'utils';
import {
  GET_LOCAL_ID,
  ROTATE_PHOTO,
} from 'constants';


const initialState = {
  localId: null,
  rotation: 0,
};

export default createReducer(initialState, {
  [GET_LOCAL_ID]: (state, payload) => ({ ...state, localId: payload.localId }),
  [ROTATE_PHOTO]: state => ({ ...state, rotation: (state.rotation + 90) % 360 }),
});
