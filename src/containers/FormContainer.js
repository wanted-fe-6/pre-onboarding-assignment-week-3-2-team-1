import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form';

function FormContainer() {
  const store = useSelector(state => state.comments);
  console.info(store);

  const nextPostId = store.commentList.data?.contents[0].id + 1;
  console.info('nextPostId', nextPostId);
  return <Form nextPostId={nextPostId} />;
}

export default FormContainer;
