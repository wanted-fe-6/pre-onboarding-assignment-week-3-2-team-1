import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PageList from '../components/PageList';
import { movePage, getTotalPages } from '../redux/pagination/slice';

function PageListContainer() {
  const pagination = useSelector(store => store.pagination.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPages());
  }, []);

  const createClickHandler = pageNumber => () => {
    dispatch(movePage(pageNumber));
  };

  return <PageList pagination={pagination} createClickHandler={createClickHandler} />;
}

export default PageListContainer;
