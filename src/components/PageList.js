import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { loadComments, updatePage } from '../store/reducers/comments';

function PageList() {
  const { pageLength, curPage } = useSelector(state => state.CommentsReducer);

  const pageArray = [];

  const dispatch = useDispatch();

  const changePage = index => {
    dispatch(updatePage(index));
  };

  const addPages = () => {
    const totalPages = Math.ceil(pageLength / 4);
    let tmp = [];
    for (let i = 1; i < totalPages + 1; i++) {
      if (i === curPage) {
        tmp.push(
          <Page curPage="true" key={i} onClick={() => changePage(i)}>
            {i}
          </Page>
        );
      } else {
        tmp.push(
          <Page key={i} onClick={() => changePage(i)}>
            {i}
          </Page>
        );
      }
    }
    pageArray.push(...tmp);
  };

  if (pageLength) {
    addPages();
  }

  useEffect(() => {
    dispatch(loadComments(curPage));
    addPages();
  }, [curPage]);

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ curPage }) =>
    curPage &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
`;
