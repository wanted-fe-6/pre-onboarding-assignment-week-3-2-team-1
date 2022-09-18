import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../components/Form';

import { postComment as postCommentApi, putComment as PutCommentApi } from '../api/comments';
import {
  changeAuthor,
  changeContent,
  setFormId,
  changeCreatedAt,
  changeProfileUrl,
  resetForm,
} from '../store/form';
import {
  addComment,
  updateComment,
  changeCurPage,
  changeCurPageComments,
} from '../store/localComments';

function FormContainer() {
  const { id, profile_url, author, content, createdAt } = useSelector(state => state.form);
  const { comments, curPage } = useSelector(state => state.localComments);
  const dispatch = useDispatch();

  const formContent = { profile_url, author, content, createdAt };

  const dispatchFunctions = {
    changeAuthor,
    changeContent,
    changeCreatedAt,
    changeProfileUrl,
  };

  const onSubmit = e => {
    e.preventDefault();

    const inputForm = {
      profile_url,
      author,
      createdAt,
      content,
    };

    if (!id) {
      inputForm.id = comments[comments.length - 1].id + 1;
      postCommentApi(inputForm);
      dispatch(addComment(inputForm));
      dispatch(changeCurPage(1));
      dispatch(changeCurPageComments(1));
    } else {
      inputForm.id = id;
      PutCommentApi(id, inputForm);
      dispatch(updateComment(id, inputForm));
      dispatch(setFormId(null));
      dispatch(changeCurPageComments(curPage));
    }
    dispatch(resetForm());
  };

  return (
    <Form
      onSubmit={onSubmit}
      id={id}
      formContent={formContent}
      dispatch={dispatch}
      dispatchFunctions={dispatchFunctions}
    />
  );
}

export default FormContainer;
