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
    movePage: (state, { payload }) => reducerUtils.success({ ...state.data, current: payload }),
  },
});

export const { movePage, getTotalPages, getTotalPagesSuccess, getTotalPagesError } =
  paginationSlice.actions;
export default paginationSlice.reducer;
