import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 1 };
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    incrementPage: state => state + 1,
    decrementPage: state => state - 1,
  },
});
export const { decrementPage, incrementPage } = paginationSlice.actions;
export default paginationSlice.reducer;
