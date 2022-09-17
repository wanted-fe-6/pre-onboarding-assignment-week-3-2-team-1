import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { loadComments } from '../store/reducers/getComments';

function PageList() {
  const { pageLength } = useSelector(state => state.getComments);
  const [curPage, setCurPage] = useState(1);

  const dispatch = useDispatch();

  const getComments = () => {
    dispatch(loadComments(curPage));
  };

  useEffect(() => {
    getComments();
  }, [curPage]);

  let totalPages = 0;
  let pageArray = [];

  const changePage = index => {
    setCurPage(index);
  };

  const addPages = () => {
    totalPages = Math.ceil(pageLength / 4);
    let tmp = [];
    console.info(1);
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
