import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import commentApi from '../api/comment';
import { editAcomment, createAComment } from '../redux/comment/slice';
import { movePage } from '../redux/pagination/slice';
import { setForm, resetForm } from '../redux/form/slice';

import Form from '../components/Form';

function FormContainer() {
  const form = useSelector(store => store.form.data);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setForm({ [e.target.name]: e.target.value }));
  };

  const handleSumbit = async e => {
    e.preventDefault();

    if (!form.id) {
      const newForm = await commentApi.createAComment(form);
      dispatch(createAComment(newForm));
      dispatch(movePage(1));
    } else {
      commentApi.updateAComment(form.id, form);
      dispatch(editAcomment(form));
    }
    dispatch(resetForm());
  };

  return <Form form={form} handleSumbit={handleSumbit} handleChange={handleChange} />;
}

export default FormContainer;
