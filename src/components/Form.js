import React from 'react';
import styled from 'styled-components';

function Form({ form, handleSumbit, handleChange }) {
  const { profile_url, author, content, createdAt } = form;
  return (
    <FormStyle>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profile_url}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={author}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          value={content}
          onChange={handleChange}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          value={createdAt}
          onChange={handleChange}
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
