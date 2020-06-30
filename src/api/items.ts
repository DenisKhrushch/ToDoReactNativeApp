import {sendRequest} from '../helpers/sendRequest';
import {REQUEST_URL} from '../constants/constants';

export const loadListAPI = (token: string) =>
  sendRequest('GET', `${REQUEST_URL}/list`, token, null);

export const addItemAPI = (value: string, token: string) =>
  sendRequest('POST', `${REQUEST_URL}/add`, token, {value});

export const checkItemAPI = (id: number, token: string) =>
  sendRequest('POST', `${REQUEST_URL}/check`, token, {id});

export const deleteItemAPI = (id: number, token: string) =>
  sendRequest('POST', `${REQUEST_URL}/delete`, token, {id});

export const editItemAPI = (id: number, value: string, token: string) =>
  sendRequest('POST', `${REQUEST_URL}/edit`, token, {id, value});

export const clearCopmpletedAPI = (token: string) =>
  sendRequest('GET', `${REQUEST_URL}/clear-completed`, token, null);
