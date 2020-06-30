import {
  TODO_ACTIONS,
  LoadListRequest,
  AddItemRequest,
  IsCheckedRequest,
  AddEditedItemRequest,
  DeleteItemRequest,
  ClearCompletedRequest,
  ShowAll,
  ShowActive,
  ShowCompleted,
} from './actionTypes';

export const loadList = (): LoadListRequest => ({
  type: TODO_ACTIONS.LOAD_LIST_REQUEST,
});

export const addItem = (value: string): AddItemRequest => ({
  type: TODO_ACTIONS.ADD_ITEM_REQUEST,
  payload: {value},
});

export const checkItem = (id: number): IsCheckedRequest => ({
  type: TODO_ACTIONS.IS_CHECKED_REQUEST,
  payload: {id},
});

export const deleteItem = (id: number): DeleteItemRequest => ({
  type: TODO_ACTIONS.DELETE_ITEM_REQUEST,
  payload: {id},
});

export const clearCompleted = (): ClearCompletedRequest => ({
  type: TODO_ACTIONS.CLEAR_COMPLETED_REQUEST,
});

export const editItem = (id: number, value: string): AddEditedItemRequest => ({
  type: TODO_ACTIONS.ADD_EDITED_ITEM_REQUEST,
  payload: {id, value},
});

export const showAll = (): ShowAll => ({type: TODO_ACTIONS.SHOW_ALL});

export const showActive = (): ShowActive => ({
  type: TODO_ACTIONS.SHOW_ACTIVE,
});

export const showCompleted = (): ShowCompleted => ({
  type: TODO_ACTIONS.SHOW_COMPLETED,
});
