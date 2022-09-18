import { call, put, takeEvery } from 'redux-saga/effects';
import { getForm, getFormError, getFormSuccess } from './slice';
import commentApi from '../../api/comment';

function* fetchAComment({ payload }) {
  try {
    const comment = yield call(commentApi.getAComment, payload);
    yield put(getFormSuccess(comment));
  } catch (err) {
    yield put(getFormError(err));
  }
}

export function* watchForm() {
  yield takeEvery(getForm, fetchAComment);
}
