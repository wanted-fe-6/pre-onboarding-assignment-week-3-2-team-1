import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

import { getAllComments } from './store/comments';

function App() {
  const { data, loading, error } = useSelector(state => state.comments.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getAllComments());
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return (
    <div>
      <CommentListContainer comments={data} />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
