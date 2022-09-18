import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageList from '../components/PageList';
import { getCommentsLength } from '../modules/comments';

function PageListContainer() {
  const { commentList, commentLength } = useSelector(state => state.comments);
  const { data, loading, error } = commentLength;
  const pageId = commentList.data?.param;
  const dispatch = useDispatch();
  // console.info(pageId);

  useEffect(() => {
    dispatch(getCommentsLength());
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return null;

  return <PageList data={data} pageId={pageId} dispatch={dispatch} />;
}

export default PageListContainer;
