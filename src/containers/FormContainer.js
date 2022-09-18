import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form';

function FormContainer() {
  const store = useSelector(state => state.comments);
  console.info(store);

  const nextPostId = store.commentList.data?.contents.commentList[0].id + 1;
  const pageId = store.commentList.data?.param;
  const isEdit = store.comment.data?.contents;
  console.info('nextPostId', nextPostId);
  console.info('isEdit', isEdit);
  return <Form nextPostId={nextPostId} pageId={pageId} isEdit={isEdit} />;
}

export default FormContainer;
