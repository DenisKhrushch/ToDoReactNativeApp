import {UserState} from './../user/reducer';
import {ListState} from './../list/reducer';
export interface RootState {
  listReducer: ListState;
  userReducer: UserState;
}
