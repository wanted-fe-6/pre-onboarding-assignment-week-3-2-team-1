import apiModel from './api';
import React, { useState, useEffect } from 'react';

const Temp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await apiModel.getComments('/comments');
      console.info('res', res);
      setData(res);
    };
    getComments();
  }, []);

  return (
    <ul>
      {data.map(comment => (
        <li key={comment.id}>{comment.author}</li>
      ))}
    </ul>
  );
};
export default Temp;
