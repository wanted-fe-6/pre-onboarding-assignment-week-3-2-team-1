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
    getForm: state => reducerUtils.loading({ ...state.data }),
    getFormSuccess: (_, { payload }) => reducerUtils.success(payload),
    getFormError: (_, { payload }) => reducerUtils.error(payload),
    setForm: (state, { payload }) => ({ ...state, data: { ...state.data, ...payload } }),
    resetForm: () => reducerUtils.initial(initialForm),
  },
});

export const { getForm, getFormError, getFormSuccess, setForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
