const initialState = {
  id: null,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};

const CHANGE_PROFILE_URL = 'form/CHANGE_PROFILE_URL';
const CHANGE_AUTHOR = 'form/CHANGE_AUTHOR';
const CHANGE_CONTENT = 'form/CHANGE_CONTENT';
const CHANGE_CREATED_AT = 'form/CHANGE_CREATED_AT';
const RESET_FORM = 'form/RESET_FORM';
const SET_FORM_ID = 'form/SET_FORM_ID';

export const changeProfileUrl = value => ({
  type: CHANGE_PROFILE_URL,
  payload: value,
});

export const changeAuthor = value => ({
  type: CHANGE_AUTHOR,
  payload: value,
});

export const changeContent = value => ({
  type: CHANGE_CONTENT,
  payload: value,
});

export const changeCreatedAt = value => ({
  type: CHANGE_CREATED_AT,
  payload: value,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setFormId = id => ({
  type: SET_FORM_ID,
  payload: id,
});

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROFILE_URL:
      return {
        ...state,
        profile_url: action.payload,
      };
    case CHANGE_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case CHANGE_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case CHANGE_CREATED_AT:
      return {
        ...state,
        createdAt: action.payload,
      };
    case SET_FORM_ID:
      return {
        ...state,
        id: action.payload,
      };
    case RESET_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
