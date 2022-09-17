import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import { getComments } from '../redux/comment/slice';

function CommentListContainer() {
  const comments = useSelector(store => store.comment.data);
  const { current } = useSelector(store => store.pagination.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({ page: current }));
  }, [current]);

  return <CommentList comments={comments} />;
}

export default CommentListContainer;
