import { takeEvery, call, put } from 'redux-saga/effects';
import Comments from '../../api/comments';
import { loadCommentsSuccess, loadCommentsFail } from '../reducers/getComments';

function* getComments(action) {
  try {
    const { data, headers } = yield call(Comments.getComments, action.page);
    yield put(loadCommentsSuccess(data, headers['x-total-count']));
  } catch (error) {
    yield put(loadCommentsFail(error));
  }
}

function* rootSaga() {
  yield takeEvery('GET_COMMENTS', getComments);
}

export default rootSaga;
