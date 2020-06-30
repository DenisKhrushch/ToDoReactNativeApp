import {Item} from './../interfaces/Item';
import {
  TODO_ACTIONS,
  ShowAll,
  ShowActive,
  ShowCompleted,
  AddEditedItemSuccess,
  DeleteItemSuccess,
  AddItemSuccess,
  IsCheckedSuccess,
  LoadListSuccess,
  ClearCompletedSuccess,
} from './actionTypes';
import {MODES} from '../constants/constants';

export interface ListState {
  itemsList: Item[];
  itemsListToShow: Item[];
  mode: string;
}

export const initialState: ListState = {
  itemsList: [],
  itemsListToShow: [],
  mode: MODES.ALL,
};

type ListReducerAction =
  | ShowAll
  | ShowActive
  | ShowCompleted
  | LoadListSuccess
  | AddItemSuccess
  | IsCheckedSuccess
  | AddEditedItemSuccess
  | DeleteItemSuccess
  | ClearCompletedSuccess;

export const listReducer = (
  state = initialState,
  action: ListReducerAction,
) => {
  switch (action.type) {
    case TODO_ACTIONS.SHOW_ACTIVE:
      return {
        ...state,
        mode: MODES.ACTIVE,
        itemsListToShow: state.itemsList.filter(item => item.active),
      };
    case TODO_ACTIONS.SHOW_COMPLETED:
      return {
        ...state,
        mode: MODES.COMPLETED,
        itemsListToShow: state.itemsList.filter(item => !item.active),
      };
    case TODO_ACTIONS.SHOW_ALL:
      return {
        ...state,
        mode: MODES.ALL,
        itemsListToShow: state.itemsList,
      };
    case TODO_ACTIONS.LOAD_LIST_SUCCESS:
      return {
        ...state,
        itemsList: action.payload.data,
        itemsListToShow: action.payload.data,
        mode: MODES.ALL,
      };
    case TODO_ACTIONS.IS_CHECKED_SUCCESS:
    case TODO_ACTIONS.ADD_ITEM_SUCCESS:
      return {
        ...state,
        itemsList: action.payload.data,
        itemsListToShow:
          state.mode === MODES.ACTIVE
            ? action.payload.data.filter((item: Item) => item.active)
            : state.mode === MODES.COMPLETED
            ? action.payload.data.filter((item: Item) => !item.active)
            : action.payload.data,
      };
    case TODO_ACTIONS.DELETE_ITEM_SUCCESS:
    case TODO_ACTIONS.CLEAR_COMPLETED_SUCCESS:
    case TODO_ACTIONS.ADD_EDITED_ITEM_SUCCESS:
      return {
        ...state,
        itemsList: action.payload.data,
        itemsListToShow: action.payload.data,
      };
    default:
      return state;
  }
};
