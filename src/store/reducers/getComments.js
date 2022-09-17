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

const getComments = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMMENTS_SUCCESS':
      return { comments: [...action.data], pageLength: action.pageLength };
    case 'GET_COMMENTS_FAIL':
      return [...state, action.error];
    default:
      return state;
  }
};

export default getComments;
