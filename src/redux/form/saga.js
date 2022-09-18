import { call, put, takeEvery } from 'redux-saga/effects';
import { getForm, getFormError, getFormSuccess } from './slice';
import commentApi from '../../api/comment';

function* fetchAComment({ payload }) {
  const that = commentApi;
  try {
    const comment = yield call([that, commentApi.getAComment], payload);
    yield put(getFormSuccess(comment));
  } catch (err) {
    yield put(getFormError(err));
  }
}

export function* watchForm() {
  yield takeEvery(getForm, fetchAComment);
}
