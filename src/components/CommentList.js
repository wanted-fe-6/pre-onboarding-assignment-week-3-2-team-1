import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { deleteComments, loadComments, updatePage } from '../store/reducers/comments';

function CommentList() {
  const { comments } = useSelector(state => state.CommentsReducer);

  const dispatch = useDispatch();

  const handleDeleteComment = id => {
    dispatch(deleteComments(id));
    dispatch(loadComments(1));
    dispatch(updatePage(1));
  };

  return (
    <Comment>
      {comments?.length
        ? comments.map((comment, key) => (
            <div key={key}>
              <img src={comment.profile_url} alt="" />

              {comment.author}

              <CreatedAt>{comment.createdAt}</CreatedAt>

              <Content>{comment.content}</Content>

              <Button>
                <button>수정</button>
                <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
              </Button>

              <hr />
            </div>
          ))
        : '없음'}
    </Comment>
  );
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
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
