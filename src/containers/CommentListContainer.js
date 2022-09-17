import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import { getComments } from '../redux/comment/slice';

function CommentListContainer() {
  const comments = useSelector(state => state.comment.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({ page: 1 }));
  }, []);

  return <CommentList comments={comments} />;
}

export default CommentListContainer;
