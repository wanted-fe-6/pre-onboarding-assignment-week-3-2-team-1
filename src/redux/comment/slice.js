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
  },
});

export const { getComments, getCommentsError, getCommentsSuccess } = commentSlice.actions;

export default commentSlice.reducer;
