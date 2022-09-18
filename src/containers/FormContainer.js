import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form';

function FormContainer() {
  const store = useSelector(state => state.comments);

  const nextPostId = store.commentList.data?.contents.commentList[0].id + 1;
  const pageId = store.commentList.data?.param;
  const isEdit = store.comment.data?.contents;

  return <Form nextPostId={nextPostId} pageId={pageId} isEdit={isEdit} />;
}

export default FormContainer;
