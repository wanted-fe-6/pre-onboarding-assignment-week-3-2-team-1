import React from 'react';

import CommentList from '../components/CommentList';
import Form from '../components/Form';
import PageList from '../components/PageList';

function CommentPage() {
  return (
    <div>
      <CommentList />
      <PageList />
      <Form />
    </div>
  )
}

export default CommentPage;