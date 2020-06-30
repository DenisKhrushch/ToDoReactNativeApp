import {RegisteringUser, LoginingUser} from './../interfaces/user';
import {userRequest} from '../helpers/sendRequest';
import {REQUEST_URL} from '../constants/constants';

export const registerAPI = (user: RegisteringUser) =>
  userRequest(`${REQUEST_URL}/register`, {...user});
export const loginAPI = (user: LoginingUser) =>
  userRequest(`${REQUEST_URL}/login`, {...user});
