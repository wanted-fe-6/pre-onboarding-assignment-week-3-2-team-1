import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getComment, getComments } from '../modules/comments';

function CommentList() {
  const { data, loading, error } = useSelector(state => state.comments.commentList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(1));
  }, [dispatch]);

  const handleEditComment = id => {
    dispatch(getComment(id));
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return data.contents.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt="프로필 사진" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button>
        <a onClick={() => handleEditComment(comment.id)}>수정</a>
        <a>삭제</a>
      </Button>

      <hr />
    </Comment>
  ));
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
