import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialForm = {
  id: null,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};
const initialState = reducerUtils.initial(initialForm);
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getAForm: state => reducerUtils.loading({ ...state.data }),
    getAFormSuccess: (_, { payload }) => reducerUtils.success(payload),
    getAFormError: (_, { payload }) => reducerUtils.error(payload),
    setAForm: (state, { payload }) => ({ ...state, data: { ...state.data, ...payload } }),
    resetAForm: () => reducerUtils.initial(initialForm),
  },
});

export const { getAForm, getAFormError, getAFormSuccess, setAForm, resetAForm } = formSlice.actions;
export default formSlice.reducer;
