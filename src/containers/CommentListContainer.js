import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import { getComments } from '../redux/comment/slice';

function CommentListContainer() {
  const comments = useSelector(state => state.comment.data);
  const dispatch = useDispatch();

  useEffect(() => {
    //todo : page를 위해서 redux를 새롭게 짜야할 것 같기도 한데?
    dispatch(getComments({ page: 1 }));
  }, []);

  return <CommentList comments={comments} />;
}

export default CommentListContainer;
