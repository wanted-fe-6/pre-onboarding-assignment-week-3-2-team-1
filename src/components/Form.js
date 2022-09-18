import React from 'react';
import styled from 'styled-components';

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

function Form({ onSubmit, formContent, dispatch, dispatchFunctions }) {
  return (
    <FormStyle>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={formContent.profile_url}
          onChange={e => dispatch(dispatchFunctions.changeProfileUrl(e.target.value))}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={formContent.author}
          onChange={e => dispatch(dispatchFunctions.changeAuthor(e.target.value))}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={formContent.content}
          onChange={e => dispatch(dispatchFunctions.changeContent(e.target.value))}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={formContent.createdAt}
          onChange={e => dispatch(dispatchFunctions.changeCreatedAt(e.target.value))}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
