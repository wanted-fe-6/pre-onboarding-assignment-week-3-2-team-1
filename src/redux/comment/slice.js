import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState = reducerUtils.initial();

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComments: state => reducerUtils.loading(state),
    getCommentsSuccess: (_, { payload }) => reducerUtils.success(payload),
    getCommentsError: (_, { payload }) => reducerUtils.error(payload),
    updateComments: (state, { payload }) => {
      const { data } = state;
      const newComments = data.map(comment => {
        if (comment.id !== payload.id) return comment;
        else return payload;
      });
      return { ...state, data: newComments };
    },
    deleteComments: (state, { payload }) => {
      const { data } = state;
      const newComments = data.filter(comment => comment.id !== payload);
      return { ...state, data: newComments };
    },
  },
});

export const { getComments, getCommentsError, getCommentsSuccess, updateComments, deleteComments } =
  commentSlice.actions;

export default commentSlice.reducer;
