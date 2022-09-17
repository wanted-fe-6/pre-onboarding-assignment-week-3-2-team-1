import { call, put, takeEvery } from 'redux-saga/effects';
import { getAForm, getAFormError, getAFormSuccess } from './slice';
import commentApi from '../../services/comment';

function* fetchAComment({ payload }) {
  const that = commentApi;
  try {
    const comment = yield call([that, commentApi.getAComment], payload);
    yield put(getAFormSuccess(comment));
  } catch (err) {
    yield put(getAFormError(err));
  }
}

export function* watchForm() {
  yield takeEvery(getAForm, fetchAComment);
}
