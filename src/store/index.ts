import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import postsReducer from './slices/postsSlice';

// Import slices and API services

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat
      // Add middleware here
      (),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
