import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import errorMessage from './errorMessage';
import entities from './entities';
import photo from './photo';


const rootReducer = combineReducers({
  routing: routerReducer,
  errorMessage,
  entities,
  photo,
});

export default rootReducer;
