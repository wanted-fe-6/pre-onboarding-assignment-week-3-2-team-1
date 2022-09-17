import { all } from 'redux-saga/effects';

import commentReducer from './comment/slice';
import paginationReducer from './pagination/slice';
import { watchComments } from './comment/saga';
import { watchPagination } from './pagination/saga';

export const rootReducer = {
  comment: commentReducer,
  pagination: paginationReducer,
};

export function* rootSaga() {
  yield all([watchComments(), watchPagination()]);
}
