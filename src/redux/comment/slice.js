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
    editAcomment: (state, { payload }) => {
      const { data } = state;
      const newComments = data.map(comment => {
        if (comment.id !== payload.id) return comment;
        else return payload;
      });
      return { ...state, data: newComments };
    },
    createAComment: (state, { payload }) => {
      const { data } = state;
      const newComments = [payload, ...data];
      newComments.length = 10;
      return { ...state, data: newComments };
    },
    deleteAComment: (state, { payload }) => {
      const { data } = state;
      const newComments = data.filter(comment => comment.id !== payload);
      return { ...state, data: newComments };
    },
  },
});

export const {
  getComments,
  getCommentsError,
  getCommentsSuccess,
  createAComment,
  editAcomment,
  deleteAComment,
} = commentSlice.actions;

export default commentSlice.reducer;
