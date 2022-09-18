import { PAGE_PER_COMMENTS } from '../../constant';

// comments format
// {
//   id: 0,
//   profile_url: '',
//   author: '',
//   content: '',
//   createdAt: '',
// },

const initialState = {
  totalpages: 1,
  curPage: 1,
  curPageComments: [],
  comments: [],
};

const INIT_COMMENTS = 'localComments/INIT_COMMENTS';
const CHANGE_TOTAL_PAGES = 'localComments/CHANGE_TOTAL_PAGES';
const CHANGE_CUR_PAGE = 'localComments/CHANGE_CUR_PAGE';
const CHANGE_CUR_PAGE_COMMENTS = 'localComments/CHANGE_CUR_PAGE_COMMENTS';
const ADD_COMMENT = 'localComments/ADD_COMMENT';
const UPDATE_COMMENT = 'localComments/UPDATE_COMMENT';
const DELETE_COMMENT = 'localComments/DELETE_COMMENT';

export const initComments = comments => ({ type: INIT_COMMENTS, payload: comments });
export const changeTotalPages = pagesNum => ({ type: CHANGE_TOTAL_PAGES, payload: pagesNum });
export const changeCurPage = page => ({ type: CHANGE_CUR_PAGE, payload: page });
export const changeCurPageComments = page => ({ type: CHANGE_CUR_PAGE_COMMENTS, payload: page });
export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const updateComment = (id, comment) => ({ type: UPDATE_COMMENT, payload: { id, comment } });
export const deleteComment = id => ({ type: DELETE_COMMENT, payload: id });

export default function localCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case CHANGE_TOTAL_PAGES:
      return {
        ...state,
        totalpages: action.payload,
      };
    case CHANGE_CUR_PAGE:
      return {
        ...state,
        curPage: action.payload,
      };
    case CHANGE_CUR_PAGE_COMMENTS:
      return {
        ...state,
        curPageComments: state.comments.slice(
          (state.curPage - 1) * PAGE_PER_COMMENTS,
          (state.curPage - 1) * PAGE_PER_COMMENTS + PAGE_PER_COMMENTS
        ),
      };
    case ADD_COMMENT:
      return {
        ...state,
        totalpages: Math.ceil((state.comments.length + 1) / PAGE_PER_COMMENTS),
        comments: [...state.comments, action.payload],
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id !== action.payload.id) {
            return comment;
          }
          return action.payload.comment;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        totalpages: Math.ceil((state.comments.length - 1) / PAGE_PER_COMMENTS),
        comments: state.comments.filter(comment => comment.id !== action.payload),
      };
    default:
      return state;
  }
}
