import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageList from '../components/PageList';

function PageListContainer() {
  const { commentList } = useSelector(state => state.comments);
  const { data, loading, error } = commentList;
  const pageId = commentList.data?.param;
  const dispatch = useDispatch();

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return null;

  return <PageList data={data} pageId={pageId} dispatch={dispatch} />;
}

export default PageListContainer;
