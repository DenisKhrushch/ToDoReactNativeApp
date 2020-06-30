import {RootState} from './../interfaces/rootState';
import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
  TODO_ACTIONS,
  AddEditedItemRequest,
  AddItemRequest,
  IsCheckedRequest,
  DeleteItemRequest,
} from './actionTypes';
import {
  loadListAPI,
  addItemAPI,
  deleteItemAPI,
  checkItemAPI,
  clearCopmpletedAPI,
  editItemAPI,
} from '../api/items';

function* loadListFromBE() {
  const token = yield select(
    (state: RootState) => state.userReducer.accessToken,
  );
  try {
    const itemsList = yield call(loadListAPI, token);
    yield put({
      type: TODO_ACTIONS.LOAD_LIST_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.LOAD_LIST_FAIL,
    });
  }
}
function* addItemToList(action: AddItemRequest) {
  try {
    const token = yield select(
      (state: RootState) => state.userReducer.accessToken,
    );
    const itemsList = yield call(addItemAPI, action.payload.value, token);
    yield put({
      type: TODO_ACTIONS.ADD_ITEM_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.ADD_ITEM_FAIL,
    });
  }
}
function* toggleActive(action: IsCheckedRequest) {
  try {
    const token = yield select(
      (state: RootState) => state.userReducer.accessToken,
    );
    const itemsList = yield call(checkItemAPI, action.payload.id, token);
    yield put({
      type: TODO_ACTIONS.IS_CHECKED_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.IS_CHECKED_FAIL,
    });
  }
}
function* deleteItemFromList(action: DeleteItemRequest) {
  try {
    const token = yield select(
      (state: RootState) => state.userReducer.accessToken,
    );
    const itemsList = yield call(deleteItemAPI, action.payload.id, token);
    yield put({
      type: TODO_ACTIONS.DELETE_ITEM_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.DELETE_ITEM_FAIL,
    });
  }
}
function* clearCompleted() {
  try {
    const token = yield select(
      (state: RootState) => state.userReducer.accessToken,
    );
    const itemsList = yield call(clearCopmpletedAPI, token);
    yield put({
      type: TODO_ACTIONS.CLEAR_COMPLETED_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.CLEAR_COMPLETED_FAIL,
    });
  }
}
function* editItem(action: AddEditedItemRequest) {
  const token = yield select(
    (state: RootState) => state.userReducer.accessToken,
  );
  const {id, value} = action.payload;
  try {
    const itemsList = yield call(editItemAPI, id, value, token);
    yield put({
      type: TODO_ACTIONS.ADD_EDITED_ITEM_SUCCESS,
      payload: {data: itemsList},
    });
  } catch (e) {
    yield put({
      type: TODO_ACTIONS.ADD_EDITED_ITEM_FAIL,
    });
  }
}

export function* listSaga() {
  yield takeEvery(TODO_ACTIONS.LOAD_LIST_REQUEST, loadListFromBE);
  yield takeEvery(TODO_ACTIONS.ADD_ITEM_REQUEST, addItemToList);
  yield takeEvery(TODO_ACTIONS.IS_CHECKED_REQUEST, toggleActive);
  yield takeEvery(TODO_ACTIONS.DELETE_ITEM_REQUEST, deleteItemFromList);
  yield takeEvery(TODO_ACTIONS.CLEAR_COMPLETED_REQUEST, clearCompleted);
  yield takeEvery(TODO_ACTIONS.ADD_EDITED_ITEM_REQUEST, editItem);
}
