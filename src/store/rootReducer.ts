import {combineReducers} from 'redux';
import {listReducer} from '../list/reducer';
import {userReducer} from '../user/reducer';

export const rootReducer = () =>
  combineReducers({
    listReducer,
    userReducer,
  });
