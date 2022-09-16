import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import commentReducer from '../redux/comment/slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, sagaMiddleware),
});

//todo : rootSaga 추가하기
sagaMiddleware.run();
