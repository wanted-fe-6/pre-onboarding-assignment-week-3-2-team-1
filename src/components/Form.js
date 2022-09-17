import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Comments from '../api/comments';

import { useDispatch, useSelector } from 'react-redux';
import { loadComments, updatePage } from '../store/reducers/comments';

function Form() {
  const [avatar, setAvatar] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const onChangeAvatar = e => {
    setAvatar(e.target.value);
  };

  const onChangeAuthor = e => {
    setAuthor(e.target.value);
  };

  const onChangeDesc = e => {
    setDescription(e.target.value);
  };

  const onChangeDate = e => {
    setDate(e.target.value);
  };

  const initialForm = form => {
    if (form) {
      setAvatar(form.profile_url);
      setAuthor(form.author);
      setDescription(form.content);
      setDate(form.createdAt);
    } else {
      setAvatar('');
      setAuthor('');
      setDescription('');
      setDate('');
    }
  };

  const { form, curPage } = useSelector(state => state.CommentsReducer);

  const openUpdateForm = () => {
    if (form) {
      initialForm(form);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (form) {
      const id = form.id;
      Comments.updateComments({ id, avatar, author, description, date }).then(() => {
        dispatch(loadComments(curPage));
        initialForm();
      });
    } else {
      Comments.createComments({ avatar, author, description, date }).then(() => {
        dispatch(loadComments(1));
        dispatch(updatePage(1));
        initialForm();
      });
    }
  };

  useEffect(() => {
    openUpdateForm();
  }, [form]);

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="profile_url"
          value={avatar}
          placeholder="https://picsum.photos/id/1/50/50"
          onChange={onChangeAvatar}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="작성자"
          onChange={onChangeAuthor}
          required
        />
        <br />
        <textarea
          name="content"
          value={description}
          placeholder="내용"
          onChange={onChangeDesc}
          required
        ></textarea>
        <br />
        <input
          type="text"
          value={date}
          name="createdAt"
          placeholder="2020-05-30"
          onChange={onChangeDate}
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
