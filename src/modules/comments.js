import apiModel from '../api';
import { createThunk, handleReducer, reducerUtils } from '../util/async.utill';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const GET_COMMENT = 'GET_COMMENT';
const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

const POST_COMMENT = 'POST_COMMENT';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

const PUT_COMMENT = 'PUT_COMMENT';
const PUT_COMMENT_SUCCESS = 'PUT_COMMENT_SUCCESS';
const PUT_COMMENT_ERROR = 'PUT_COMMENT_ERROR';

const DEL_COMMENT = 'DEL_COMMENT';
const DEL_COMMENT_SUCCESS = 'DEL_COMMENT_SUCCESS';
const DEL_COMMENT_ERROR = 'DEL_COMMENT_ERROR';

const GET_NEXT_ID = 'GET_NEXT_ID';
const GET_NEXT_ID_SUCCESS = 'GET_NEXT_ID_SUCCESS';
const GET_NEXT_ID_ERROR = 'GET_NEXT_ID_ERROR';

export const getComments = createThunk(GET_COMMENTS, apiModel.getComments);
export const getComment = createThunk(GET_COMMENT, apiModel.getComment);
export const postComment = createThunk(POST_COMMENT, apiModel.postComment);
export const putComment = createThunk(PUT_COMMENT, apiModel.putComment);
export const delComment = createThunk(DEL_COMMENT, apiModel.delComment);
export const getNextId = createThunk(GET_NEXT_ID, apiModel.getNextId);

const initState = {
  commentList: reducerUtils.initial(),
  comment: reducerUtils.initial(),
  nextId: reducerUtils.initial(),
};

const getCOMMENTSReducer = handleReducer(GET_COMMENTS, 'commentList');
const getCOMMENTReducer = handleReducer(GET_COMMENT, 'comment');
const postCOMMENTReducer = handleReducer(POST_COMMENT, 'comment');
const putCOMMENTReducer = handleReducer(PUT_COMMENT, 'comment');
const delCOMMENTReducer = handleReducer(DEL_COMMENT, 'comment');
const getNEXTIDReducer = handleReducer(GET_NEXT_ID, 'nextId');

export default function comments(state = initState, action) {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return getCOMMENTSReducer(state, action);
    case GET_COMMENT:
    case GET_COMMENT_SUCCESS:
    case GET_COMMENT_ERROR:
      return getCOMMENTReducer(state, action);
    case POST_COMMENT:
    case POST_COMMENT_SUCCESS:
    case POST_COMMENT_ERROR:
      return postCOMMENTReducer(state, action);
    case PUT_COMMENT:
    case PUT_COMMENT_SUCCESS:
    case PUT_COMMENT_ERROR:
      return putCOMMENTReducer(state, action);
    case DEL_COMMENT:
    case DEL_COMMENT_SUCCESS:
    case DEL_COMMENT_ERROR:
      return delCOMMENTReducer(state, action);
    case GET_NEXT_ID:
    case GET_NEXT_ID_SUCCESS:
    case GET_NEXT_ID_ERROR:
      return getNEXTIDReducer(state, action);
    default:
      return state;
  }
}
