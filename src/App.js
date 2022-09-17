import React from 'react';
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import Temp from './Temp';

function App() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
      <Temp />
    </div>
  );
}

export default App;
