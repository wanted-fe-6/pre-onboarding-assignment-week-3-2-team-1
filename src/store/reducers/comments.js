const initialState = { curPage: 1 };

export const loadComments = page => {
  return {
    type: 'GET_COMMENTS',
    page,
  };
};

export const loadCommentsSuccess = (data, pageLength) => {
  return {
    type: 'GET_COMMENTS_SUCCESS',
    data,
    pageLength,
  };
};

export const loadCommentsFail = error => {
  return {
    type: 'GET_COMMENTS_FAIL',
    error,
  };
};

export const deleteComments = id => {
  return {
    type: 'DELETE_COMMENTS',
    id,
  };
};

export const deleteCommentsSuccess = id => {
  return {
    type: 'DELETE_COMMENTS_SUCCESS',
    id,
  };
};

export const deleteCommentsFail = error => {
  return {
    type: 'DELETE_COMMENTS_FAIL',
    error,
  };
};

export const updatePage = page => {
  return {
    type: 'UPDATE_CURRENT_PAGE',
    curPage: page,
  };
};

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PAGE':
      return { ...state, curPage: action.curPage };

    case 'GET_COMMENTS_SUCCESS':
      return { ...state, comments: [...action.data], pageLength: Number(action.pageLength) };
    case 'GET_COMMENTS_FAIL':
      return { ...state, error: action.error };

    case 'DELETE_COMMENTS_SUCCESS':
      return { ...state, comments: state.comments.filter(id => id !== action.id) };
    case 'DELETE_COMMENTS_FAIL':
      return state;
    default:
      return state;
  }
};

export default CommentsReducer;
