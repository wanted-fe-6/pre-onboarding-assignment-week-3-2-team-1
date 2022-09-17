import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { movePage } from '../redux/pagination/slice';
import { setAForm, resetAForm } from '../redux/form/slice';
import commentApi from '../services/comment';
import Form from '../components/Form';

function FormContainer() {
  const form = useSelector(store => store.form.data);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setAForm({ [e.target.name]: e.target.value }));
  };
  //mode에 따라서 update를 할지, 아니면 create를 할 지 결정해야함.
  const handleSumbit = e => {
    e.preventDefault();

    commentApi.createAComment(form);
    dispatch(resetAForm());
    dispatch(movePage(1));
  };

  return <Form form={form} handleSumbit={handleSumbit} handleChange={handleChange} />;
}

export default FormContainer;
