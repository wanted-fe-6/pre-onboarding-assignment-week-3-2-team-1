import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

//todo : 아래처럼 로직을 짜는 게 맞을까? 더 단순한 방법은 없을까?
const initialState = reducerUtils.initial({ current: 1, total: 1 });
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getTotalPages: state => reducerUtils.loading({ ...state.data }),
    getTotalPagesSuccess: (state, { payload }) =>
      reducerUtils.success({ ...state.data, total: payload }),
    getTotalPagesError: (_, { payload }) => reducerUtils.error(payload),
    //todo : payload를 받아서 page를 수정하는 식으로 변경해야 한다.
    movePage: (state, { payload }) => reducerUtils.success({ ...state.data, current: payload }),
  },
});

export const { movePage, getTotalPages, getTotalPagesSuccess, getTotalPagesError } =
  paginationSlice.actions;
export default paginationSlice.reducer;
