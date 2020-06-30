import {
  USER_ACTIONS,
  LoginRequest,
  LogoutInterface,
  RegisterRequest,
} from './actionTypes';
import {LoginingUser, RegisteringUser} from '../interfaces/user';

export const loginUser = (user: LoginingUser): LoginRequest => ({
  type: USER_ACTIONS.LOGIN_REQUEST,
  payload: {user},
});

export const registerUser = (user: RegisteringUser): RegisterRequest => ({
  type: USER_ACTIONS.REGISTER_REQUEST,
  payload: {user},
});

export const logout = (): LogoutInterface => ({
  type: USER_ACTIONS.LOGOUT,
});
