import {Item} from './../interfaces/Item';
export enum TODO_ACTIONS {
  LOAD_LIST_REQUEST = 'LOAD_LIST_REQUEST',
  LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS',
  LOAD_LIST_FAIL = 'LOAD_LIST_FAIL',

  ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST',
  ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS',
  ADD_ITEM_FAIL = 'ADD_ITEM_FAIL',

  IS_CHECKED_REQUEST = 'IS_CHECKED_REQUEST',
  IS_CHECKED_SUCCESS = 'IS_CHECKED_SUCCESS',
  IS_CHECKED_FAIL = 'IS_CHECKED_FAIL',

  DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST',
  DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS',
  DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL',

  ADD_EDITED_ITEM_REQUEST = 'ADD_EDITED_ITEM_REQUEST',
  ADD_EDITED_ITEM_SUCCESS = 'ADD_EDITED_ITEM_SUCCESS',
  ADD_EDITED_ITEM_FAIL = 'ADD_EDITED_ITEM_FAIL',

  CLEAR_COMPLETED_REQUEST = 'CLEAR_COMPLETED_REQUEST',
  CLEAR_COMPLETED_SUCCESS = 'CLEAR_COMPLETED_SUCCESS',
  CLEAR_COMPLETED_FAIL = 'CLEAR_COMPLETED_FAIL',

  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export interface LoadListRequest {
  type: TODO_ACTIONS.LOAD_LIST_REQUEST;
}
export interface LoadListSuccess {
  type: TODO_ACTIONS.LOAD_LIST_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface LoadListFail {
  type: TODO_ACTIONS.LOAD_LIST_FAIL;
}

export interface AddItemRequest {
  type: TODO_ACTIONS.ADD_ITEM_REQUEST;
  payload: {
    value: string;
  };
}
export interface AddItemSuccess {
  type: TODO_ACTIONS.ADD_ITEM_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface AddItemFail {
  type: TODO_ACTIONS.ADD_EDITED_ITEM_FAIL;
}

export interface IsCheckedRequest {
  type: TODO_ACTIONS.IS_CHECKED_REQUEST;
  payload: {
    id: number;
  };
}
export interface IsCheckedSuccess {
  type: TODO_ACTIONS.IS_CHECKED_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface IsCheckedFail {
  type: TODO_ACTIONS.IS_CHECKED_FAIL;
}

export interface DeleteItemRequest {
  type: TODO_ACTIONS.DELETE_ITEM_REQUEST;
  payload: {
    id: number;
  };
}
export interface DeleteItemSuccess {
  type: TODO_ACTIONS.DELETE_ITEM_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface DeleteItemFail {
  type: TODO_ACTIONS.DELETE_ITEM_FAIL;
}

export interface AddEditedItemRequest {
  type: TODO_ACTIONS.ADD_EDITED_ITEM_REQUEST;
  payload: {
    id: number;
    value: string;
  };
}
export interface AddEditedItemSuccess {
  type: TODO_ACTIONS.ADD_EDITED_ITEM_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface AddEditedItemFail {
  type: TODO_ACTIONS.ADD_EDITED_ITEM_FAIL;
}

export interface ClearCompletedRequest {
  type: TODO_ACTIONS.CLEAR_COMPLETED_REQUEST;
}
export interface ClearCompletedSuccess {
  type: TODO_ACTIONS.CLEAR_COMPLETED_SUCCESS;
  payload: {
    data: Item[];
  };
}
export interface ClearCompletedFail {
  type: TODO_ACTIONS.CLEAR_COMPLETED_FAIL;
}

export interface ShowAll {
  type: TODO_ACTIONS.SHOW_ALL;
}
export interface ShowActive {
  type: TODO_ACTIONS.SHOW_ACTIVE;
}
export interface ShowCompleted {
  type: TODO_ACTIONS.SHOW_COMPLETED;
}
