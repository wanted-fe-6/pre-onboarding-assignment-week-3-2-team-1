import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CommentList from '../components/CommentList';

import { deleteComment as deleteCommentApi } from '../api/comments';
import { PAGE_PER_COMMENTS } from '../constant';
import {
  initComments,
  changeTotalPages,
  changeCurPage,
  changeCurPageComments,
  deleteComment,
} from '../store/localComments';
import {
  changeProfileUrl,
  changeAuthor,
  changeContent,
  changeCreatedAt,
  setFormId,
} from '../store/form';

function CommentListContainer({ comments }) {
  const { curPageComments } = useSelector(state => state.localComments);
  const dispatch = useDispatch();

  const onDeleteComments = id => {
    if (confirm('삭제하시겠습니까?')) {
      deleteCommentApi(id);
      dispatch(deleteComment(id));
      // refactor : page 변화 -> curPageComments 계산 가능
      dispatch(changeCurPage(1));
      dispatch(changeCurPageComments(1));
    }
  };

  const setFormComments = comment => {
    dispatch(setFormId(comment.id));
    // refactor : form state 단일 관리
    dispatch(changeProfileUrl(comment.profile_url));
    dispatch(changeAuthor(comment.author));
    dispatch(changeContent(comment.content));
    dispatch(changeCreatedAt(comment.createdAt));
  };

  useEffect(() => {
    // refactor : init시 comments의 개수로 totalPage 계산 가능
    dispatch(initComments(comments.data));
    dispatch(changeTotalPages(Math.ceil(comments.data.length / PAGE_PER_COMMENTS)));
    dispatch(changeCurPageComments());
  }, []);

  return (
    <CommentList
      curPageComments={curPageComments}
      onDeleteComments={onDeleteComments}
      setFormComments={setFormComments}
    />
  );
}

export default CommentListContainer;
