import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../components/CommentList';
import Skeleton from '../components/Skeleton';

import commentApi from '../api/comment';
import { getComments, deleteComments } from '../redux/comment/slice';
import { movePage } from '../redux/pagination/slice';
import { getForm } from '../redux/form/slice';

function CommentListContainer() {
  const { data: comments, loading } = useSelector(store => store.comment);
  const pagination = useSelector(store => store.pagination.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments({ page: pagination.current }));
  }, [pagination.current]);

  const createEditHandler = id => () => {
    dispatch(getForm(id));
  };
  const createDeleteHandler = id => () => {
    const agree = confirm('정말 삭제하시겠습니까?');
    if (!agree) return;

    commentApi.deleteAComment(id);
    dispatch(deleteComments(id));
    dispatch(movePage(1));
  };

  if (loading) return <Skeleton />;
  return (
    <CommentList
      comments={comments}
      createEditHandler={createEditHandler}
      createDeleteHandler={createDeleteHandler}
    />
  );
}

export default CommentListContainer;
