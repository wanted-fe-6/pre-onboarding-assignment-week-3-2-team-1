import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import commentApi from '../api/comment';
import { updateComments } from '../redux/comment/slice';
import { movePage } from '../redux/pagination/slice';
import { setForm, resetForm } from '../redux/form/slice';

import Form from '../components/Form';

function FormContainer() {
  const form = useSelector(store => store.form.data);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setForm({ [e.target.name]: e.target.value }));
  };

  const handleSumbit = e => {
    e.preventDefault();

    if (!form.id) {
      commentApi.createAComment(form);
      dispatch(movePage(1));
    } else {
      commentApi.updateAComment(form.id, form);
      dispatch(updateComments(form));
    }
    dispatch(resetForm());
  };

  return <Form form={form} handleSumbit={handleSumbit} handleChange={handleChange} />;
}

export default FormContainer;
