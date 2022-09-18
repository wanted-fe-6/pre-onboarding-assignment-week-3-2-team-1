import apiModel from '../api';
import { createThunk, handleReducer, reducerUtils } from '../util/async.utill';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const GET_COMMENT = 'GET_COMMENT';
const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

// const POST_COMMENT = 'POST_COMMENT';
// const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
// const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

// const PUT_COMMENT = 'PUT_COMMENT';
// const PUT_COMMENT_SUCCESS = 'PUT_COMMENT_SUCCESS';
// const PUT_COMMENT_ERROR = 'PUT_COMMENT_SUCCESS';

// const DEL_COMMENT = 'DEL_COMMENT';
// const DEL_COMMENT_SUCCESS = 'DEL_COMMENT_SUCCESS';
// const DEL_COMMENT_ERROR = 'DEL_COMMENT_ERROR';

export const getComments = createThunk(GET_COMMENTS, apiModel.getComments);
export const getComment = createThunk(GET_COMMENT, apiModel.getComment);

const initState = {
  commentList: reducerUtils.initial(),
  comment: reducerUtils.initial(),
};

const getCOMMENTSReducer = handleReducer(GET_COMMENTS, 'commentList');
const getCOMMENTReducer = handleReducer(GET_COMMENT, 'comment');

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
    default:
      return state;
  }
}
