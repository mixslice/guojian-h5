import { createReducer } from 'utils';
import {
  GET_LOCAL_ID,
} from 'constants';


const initialState = {
  localId: null,
};

export default createReducer(initialState, {
  [GET_LOCAL_ID]: (state, payload) => ({ ...state, localId: payload.localId }),
});
