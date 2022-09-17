import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { movePage } from '../redux/pagination/slice';
import commentApi from '../services/comment';
import Form from '../components/Form';

const initialForm = {
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};

function FormContainer() {
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSumbit = e => {
    e.preventDefault();
    commentApi.createAComment(form);
    setForm(initialForm);
    dispatch(movePage(1));
  };
  return <Form form={form} handleSumbit={handleSumbit} handleChange={handleChange} />;
}

export default FormContainer;
