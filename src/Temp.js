import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from './modules/comments';

const Temp = () => {
  const { data, loading, error } = useSelector(state => state.comments.commentList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(1));
  }, [dispatch]);

  console.info(data);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map(comment => (
        <li key={comment.id}>{comment.author}</li>
      ))}
    </ul>
  );
};
export default Temp;
