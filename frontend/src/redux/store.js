import { configureStore } from '@reduxjs/toolkit';

import booksReduser from './slices/booksSlice';
import filterReduser from './slices/filterSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReduser,
    filter: filterReduser,
    error: errorReducer,
  },
});

export default store;
