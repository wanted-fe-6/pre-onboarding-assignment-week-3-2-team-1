import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    sample: () => {},
  },
});

export const { sample } = commentSlice.actions;
export default commentSlice.reducer;
