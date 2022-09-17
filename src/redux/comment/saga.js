import { put, takeEvery, call } from 'redux-saga/effects';

import { getComments, getCommentsSuccess, getCommentsError } from './slice';
import commentApi from '../../services/comment';

function* fetchComments(action) {
  const { payload } = action;
  const { page } = payload;

  const that = commentApi;

  try {
    const comments = yield call([that, commentApi.getComments], { page });
    yield put(getCommentsSuccess(comments));
  } catch (err) {
    yield put(getCommentsError(err));
  }
}

export function* watchComments() {
  yield takeEvery(getComments, fetchComments);
}
