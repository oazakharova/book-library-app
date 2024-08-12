import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // return { ...state, title: action.payload };
      state.title = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

// действия
// const setTitleFilter = filterSlice.actions.setTitleFilter;
export const { setTitleFilter, resetFilters, setAuthorFilter } =
  filterSlice.actions;

// отдельные функции для выбора определенных частей состояния, чтобы не делать это в компонентах
export const selectTitleFilter = (state) => state.filter.title; // filter - название слайса, title - название свойства в состоянии
export const selectAuthorFilter = (state) => state.filter.author;

// редьюсер
export default filterSlice.reducer;
