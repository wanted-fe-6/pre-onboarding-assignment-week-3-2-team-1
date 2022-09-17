import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState = reducerUtils.initial({
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
});
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getAForm: state => reducerUtils.loading({ ...state.data }),
    getAFormSuccess: (_, { payload }) => reducerUtils.success(payload),
    getAFormError: (_, { payload }) => reducerUtils.error(payload),
  },
});

export const { getAForm, getAFormError, getAFormSuccess } = formSlice.actions;
export default formSlice.reducer;
