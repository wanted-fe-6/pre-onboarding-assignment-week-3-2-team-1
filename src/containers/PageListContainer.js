import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageList from '../components/PageList';

import { changeCurPage, changeCurPageComments } from '../store/localComments';

function PageListContainer() {
  const { totalpages, curPage } = useSelector(state => state.localComments);
  const dispatch = useDispatch();

  const pageArray = Array.from({ length: totalpages }, (_, i) => i + 1);

  const onChangePage = page => {
    dispatch(changeCurPage(page));
    dispatch(changeCurPageComments(page));
  };

  return <PageList pageArray={pageArray} onChangePage={onChangePage} curPage={curPage} />;
}

export default PageListContainer;
