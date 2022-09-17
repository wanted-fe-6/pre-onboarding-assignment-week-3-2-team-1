import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import commentApi from '../services/comment';

import { getComments, deleteComments } from '../redux/comment/slice';
import { movePage } from '../redux/pagination/slice';
import { getAForm } from '../redux/form/slice';

function CommentListContainer() {
  const comments = useSelector(store => store.comment.data);
  const pagination = useSelector(store => store.pagination.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({ page: pagination.current }));
  }, [pagination.current]);

  const createEditHandler = id => () => {
    dispatch(getAForm(id));
  };
  const createDeleteHandler = id => () => {
    commentApi.deleteAComment(id);
    dispatch(deleteComments(id));
    dispatch(movePage(1));
  };

  return (
    <CommentList
      comments={comments}
      createEditHandler={createEditHandler}
      createDeleteHandler={createDeleteHandler}
    />
  );
}

export default CommentListContainer;
