import React from 'react';
import styled from 'styled-components';

function PageList() { 
  // const [pagination, setPagination] = useState(0);
  // const [onPage, setOnPage] = useState(1);

  // const onClickPage = e => {
  //   setOnPage(parseInt(e.target.textContent, 10));
  // };

  const pageArr = [];

  // for (let i = 0; i < pagination; i++) {
  //   pageArr.push(
  //     <Page Page key={i} isSelected={onPage === i + 1} onClick={onClickPage}>
  //       {i + 1}
  //     </Page>
  //   );
  // }

  pageArr.push(
    <Page Page key="1">1</Page>
  );

  return (
    <PageListStyle>
      {pageArr}
    </PageListStyle>
  )
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
