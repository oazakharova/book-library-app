import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/reducer';
import filterReduser from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksReducer, // традиционный подход в создании reducer
    filter: filterReduser, // создание reducer с помощью slice
  },
});

export default store;
