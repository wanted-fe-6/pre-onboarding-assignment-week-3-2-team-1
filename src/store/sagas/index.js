import { takeEvery, call, put } from 'redux-saga/effects';
import Comments from '../../api/comments';
import {
  loadCommentsSuccess,
  loadCommentsFail,
  deleteCommentsSuccess,
  deleteCommentsFail,
} from '../reducers/comments';

function* getComments(action) {
  try {
    const { data, headers } = yield call(Comments.getComments, action.page);
    yield put(loadCommentsSuccess(data, headers['x-total-count']));
  } catch (error) {
    yield put(loadCommentsFail(error));
  }
}

function* deleteComments(action) {
  try {
    yield call(Comments.deleteComments, action.id);
    yield put(deleteCommentsSuccess(action.id));
  } catch (error) {
    yield put(deleteCommentsFail(error));
  }
}

function* rootSaga() {
  yield takeEvery('GET_COMMENTS', getComments);
  yield takeEvery('DELETE_COMMENTS', deleteComments);
}

export default rootSaga;
