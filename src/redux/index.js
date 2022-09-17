import { all } from 'redux-saga/effects';

import commentReducer from './comment/slice';
import paginationReducer from './pagination/slice';
import { watchComments } from './comment/saga';

export const rootReducer = {
  comment: commentReducer,
  pagination: paginationReducer,
};

export function* rootSaga() {
  yield all([watchComments()]);
}
