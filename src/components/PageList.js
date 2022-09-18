import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getComments } from '../modules/comments';

function PageList({ data, pageId, dispatch }) {
  const [pageArray, setPageArray] = useState([]);
  // console.info(pageId);

  const handlePage = i => {
    // console.info(i);
    dispatch(getComments(i));
  };

  const pagination = () => {
    const pageNumbers = Math.ceil(data.contents.commentLength / 4);
    const pageArray = [];
    for (let i = 1; i <= pageNumbers; i++) {
      if (i === pageId) {
        pageArray.push(
          <Page active key={i} onClick={() => handlePage(i)}>
            {i}
          </Page>
        );
      } else {
        pageArray.push(
          <Page key={i} onClick={() => handlePage(i)}>
            {i}
          </Page>
        );
      }
    }
    // console.info('pageArray', pageArray);
    return pageArray;
  };

  useEffect(() => {
    setPageArray(pagination(pageId));
  }, [pageId]);

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
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
