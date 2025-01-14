import { put, takeEvery, call } from 'redux-saga/effects';

import { getComments, getCommentsSuccess, getCommentsError } from './slice';
import commentApi from '../../api/comment';

function* fetchComments({ payload }) {
  const { page } = payload;

  try {
    const comments = yield call(commentApi.getCommentsByPage, { page });
    yield put(getCommentsSuccess(comments));
  } catch (err) {
    yield put(getCommentsError(err));
  }
}

export function* watchComments() {
  yield takeEvery(getComments, fetchComments);
}
