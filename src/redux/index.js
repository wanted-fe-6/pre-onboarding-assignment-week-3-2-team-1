import { all } from 'redux-saga/effects';

import commentReducer from './comment/slice';
import { watchComments } from './comment/saga';

export const rootReducer = {
  comments: commentReducer,
};

export function* rootSaga() {
  yield all([watchComments()]);
}
