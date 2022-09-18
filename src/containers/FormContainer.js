import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import { getNextId } from '../modules/comments';

function FormContainer() {
  const store = useSelector(state => state.comments);
  const dispatch = useDispatch();
  console.info(store);

  useEffect(() => {
    dispatch(getNextId());
  }, []);

  const nextPostId = store.nextId.data?.contents;

  console.info(nextPostId);
  const pageId = store.commentList.data?.param;
  const isEdit = store.comment.data?.contents;

  return <Form nextPostId={nextPostId} pageId={pageId} isEdit={isEdit} />;
}

export default FormContainer;
