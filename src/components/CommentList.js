import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { loadComments } from '../store/reducers/getComments';

function CommentList() {
  const { comments, pageLength } = useSelector(state => state.getComments);

  console.info(pageLength);

  const dispatch = useDispatch();

  const getComments = () => {
    dispatch(loadComments(1));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Comment>
      {comments.length
        ? comments.map((comment, key) => (
            <div key={key}>
              <img src={comment.profile_url} alt="" />

              {comment.author}

              <CreatedAt>{comment.createdAt}</CreatedAt>

              <Content>{comment.content}</Content>

              <Button>
                <a>수정</a>
                <a>삭제</a>
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
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
