import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import { getComments } from '../redux/comment/slice';
import { getAForm } from '../redux/form/slice';

function CommentListContainer() {
  const comments = useSelector(store => store.comment.data);
  const { current } = useSelector(store => store.pagination.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({ page: current }));
  }, [current]);

  const createEditHandler = id => () => {
    dispatch(getAForm(id));
  };

  return <CommentList comments={comments} createEditHandler={createEditHandler} />;
}

export default CommentListContainer;
