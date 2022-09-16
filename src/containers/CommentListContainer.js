import React from 'react';
import { useSelector } from 'react-redux';

import CommentList from '../components/CommentList';

function CommentListContainer() {
  const comments = useSelector(state => state.comments);

  return <CommentList comments={comments} />;
}

export default CommentListContainer;
