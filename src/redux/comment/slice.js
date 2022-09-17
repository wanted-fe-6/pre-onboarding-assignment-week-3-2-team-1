import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComments: state => ({
      ...state,
      isLoading: true,
    }),
    getCommentsSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      comments: payload,
    }),
    getCommentsError: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export const { getComments, getCommentsError, getCommentsSuccess } = commentSlice.actions;

export default commentSlice.reducer;
