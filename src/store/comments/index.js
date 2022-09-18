import * as commentsApi from '../../api/comments';
import { reducerUtils, createThunk } from '../../util/async.utill';

const initialState = {
  commentsByPage: reducerUtils.initial(),
  comments: reducerUtils.initial(),
};

const GET_COMMENTS_BY_PAGE = 'comments/GET_COMMENTS_BY_PAGE';
const GET_COMMENTS_BY_PAGE_SUCCESS = 'comments/GET_COMMENTS_BY_PAGE_SUCCESS';
const GET_COMMENTS_BY_PAGE_ERROR = 'comments/GET_COMMENTS_BY_PAGE_ERROR';

const GET_COMMENTS = 'comments/GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'comments/GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'comments/GET_COMMENTS_ERROR';

export const getCommentsByPage = createThunk(GET_COMMENTS_BY_PAGE, commentsApi.getCommentsByPage);
export const getAllComments = createThunk(GET_COMMENTS, commentsApi.getComments);

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_BY_PAGE:
      return {
        ...state,
        commentsByPage: reducerUtils.loading(),
      };
    case GET_COMMENTS_BY_PAGE_SUCCESS:
      return {
        ...state,
        commentsByPage: reducerUtils.success(action.payload),
      };
    case GET_COMMENTS_BY_PAGE_ERROR:
      return {
        ...state,
        commentsByPage: reducerUtils.error(action.error),
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: reducerUtils.loading(),
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: reducerUtils.success(action.payload),
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}
