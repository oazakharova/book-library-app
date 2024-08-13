import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import createBookWithId from '../../utils/createBookWithId';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      // для filter и map return обязателен, тк filter возвращает новый объект состояния (массив), а не мутирует текущее
      return state.filter((book) => book.id !== action.payload);

      // splice мутирует состояние напрямую
      // const index = state.findIndex((book) => book.id === action.payload);
      // if (index !== -1) {
      //   state.splice(index, 1);
      // }
    },
    toggleFavorite: (state, action) => {
      // return state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // );

      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
});

export const thunkFunction = async (dispatch, getState) => {
  console.log(getState());
  try {
    const res = await axios.get('http://localhost:4000/random-book');

    if (res.status === 200 && res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithId(res.data, 'API')));
    }
  } catch (error) {
    console.error('Error fetching random book', error);
  }
  console.log(getState());
};

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
