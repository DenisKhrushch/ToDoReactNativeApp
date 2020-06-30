import {
  USER_ACTIONS,
  SetToken,
  RegisterSuccess,
  RegisterFail,
  LoginSuccess,
  LoginRequest,
  LoginFail,
  LogoutInterface,
} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

export interface UserState {
  accessToken: string;
  loading: boolean;
  registerResponseMessage: string;
  loginResponseMessage: string;
}

const initialState: UserState = {
  accessToken: '',
  loading: false,
  registerResponseMessage: '',
  loginResponseMessage: '',
};

type UserReducerAction =
  | SetToken
  | RegisterSuccess
  | RegisterFail
  | LoginSuccess
  | LoginRequest
  | LoginFail
  | LogoutInterface;

export const userReducer = (
  state = initialState,
  action: UserReducerAction,
) => {
  switch (action.type) {
    case USER_ACTIONS.SET_TOKEN:
      return {
        ...state,
        loading: true,
        accessToken: action.payload.accessToken,
      };
    // case USER_ACTIONS.REGISTER_REQUEST:
    // return {
    //   ...state,
    //   loading: false,
    // };
    case USER_ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USER_ACTIONS.REGISTER_FAIL:
      return {
        ...state,
        registerResponseMessage: action.payload.registerResponseMessage,
      };
    case USER_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loginResponseMessage: '',
      };
    case USER_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.token,
        loading: false,
        loginResponseMessage: '',
      };
    case USER_ACTIONS.LOGIN_FAIL:
      return {
        ...state,
        loginResponseMessage: action.payload.loginResponseMessage,
      };
    case USER_ACTIONS.LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        accessToken: '',
      };
    default:
      return state;
  }
};
