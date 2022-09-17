import { all } from 'redux-saga/effects';

import commentReducer from './comment/slice';
import paginationReducer from './pagination/slice';
import formReducer from './form/slice';
import modeReducer from './mode/slice';

import { watchComments } from './comment/saga';
import { watchPagination } from './pagination/saga';
import { watchForm } from './form/saga';

export const rootReducer = {
  comment: commentReducer,
  pagination: paginationReducer,
  form: formReducer,
  mode: modeReducer,
};

export function* rootSaga() {
  yield all([watchComments(), watchPagination(), watchForm()]);
}
