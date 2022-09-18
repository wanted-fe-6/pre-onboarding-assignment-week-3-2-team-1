import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getComments, postComment } from '../modules/comments';

function Form({ nextPostId }) {
  const [img, setImg] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const onChangeImg = e => {
    setImg(e.target.value);
  };

  const onChangeAuthor = e => {
    setAuthor(e.target.value);
  };

  const onChnageContent = e => {
    setContent(e.target.value);
  };

  const onChnageDate = e => {
    setDate(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const body = { id: nextPostId, profile_url: img, author, content, createdAt: date };
    dispatch(postComment(body));
    dispatch(getComments(1));
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="profile_url"
          value={img}
          onChange={onChangeImg}
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={author}
          onChange={onChangeAuthor}
          placeholder="작성자"
        />
        <br />
        <textarea
          name="content"
          value={content}
          onChange={onChnageContent}
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          value={date}
          onChange={onChnageDate}
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
