import { call, put, takeEvery } from 'redux-saga/effects';

import { getTotalPages, getTotalPagesError, getTotalPagesSuccess } from './slice';
import commentApi from '../../api/comment';

function* fetchTotalPages() {
  const that = commentApi;
  try {
    const comments = yield call([that, commentApi.getCommentsAll]);
    const totalPages = Math.ceil(comments.length / 10);

    yield put(getTotalPagesSuccess(totalPages));
  } catch (err) {
    yield put(getTotalPagesError(err));
  }
}

export function* watchPagination() {
  yield takeEvery(getTotalPages, fetchTotalPages);
}
