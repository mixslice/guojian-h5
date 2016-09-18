import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import errorMessage from './errorMessage';
import entities from './entities';


const rootReducer = combineReducers({
  routing: routerReducer,
  errorMessage,
  entities,
});

export default rootReducer;
