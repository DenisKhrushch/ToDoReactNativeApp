import {LoginingUser, RegisteringUser} from './../interfaces/user';

export enum USER_ACTIONS {
  SET_TOKEN = 'SET_TOKEN',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',

  LOGOUT = 'LOGOUT',

  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
}

export interface SetToken {
  type: USER_ACTIONS.SET_TOKEN;
  payload: {
    accessToken: string;
  };
}

export interface LoginRequest {
  type: USER_ACTIONS.LOGIN_REQUEST;
  payload: {
    user: LoginingUser;
  };
}
export interface LoginSuccess {
  type: USER_ACTIONS.LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}
export interface LoginFail {
  type: USER_ACTIONS.LOGIN_FAIL;
  payload: {
    loginResponseMessage: string;
  };
}

export interface RegisterRequest {
  type: USER_ACTIONS.REGISTER_REQUEST;
  payload: {
    user: RegisteringUser;
  };
}
export interface RegisterSuccess {
  type: USER_ACTIONS.REGISTER_SUCCESS;
}
export interface RegisterFail {
  type: USER_ACTIONS.REGISTER_FAIL;
  payload: {
    registerResponseMessage: string;
  };
}

export interface LogoutInterface {
  type: USER_ACTIONS.LOGOUT;
}
