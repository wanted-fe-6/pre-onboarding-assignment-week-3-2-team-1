import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState = reducerUtils.initial({ current: 1, total: 1 });
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getTotalPages: state => reducerUtils.loading({ ...state.data }),
    getTotalPagesSuccess: (state, { payload }) =>
      reducerUtils.success({ ...state.data, total: payload }),
    getTotalPagesError: (_, { payload }) => reducerUtils.error(payload),
    //todo: 수정해야함.
    incrementPage: state => state + 1,
    decrementPage: state => state - 1,
  },
});

export const {
  decrementPage,
  incrementPage,
  getTotalPages,
  getTotalPagesSuccess,
  getTotalPagesError,
} = paginationSlice.actions;
export default paginationSlice.reducer;
