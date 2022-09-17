import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

//? 데이터의 구조를 어떻게 만들어야 할까?

const initialState = reducerUtils.initial({ current: 1, total: 1 });
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getTotalPages: state => reducerUtils.loading(state),
    getTotalPagesSuccess: (state, { payload }) =>
      reducerUtils.success({ ...state.data, total: payload }),
    getTotalPagesError: (_, { payload }) => reducerUtils.error(payload),
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
