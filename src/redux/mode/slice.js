import { createSlice } from '@reduxjs/toolkit';

//mode : "CREATE" | "EDIT"
const initialState = 'CREATE';
const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setModeCreate: () => 'CREATE',
    setModeEdit: () => 'EDIT',
  },
});

export const { setModeCreate, setModeEdit } = modeSlice.actions;
export default modeSlice.reducer;
