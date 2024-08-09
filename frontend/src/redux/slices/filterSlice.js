import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
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
  },
});

// действия
// const setTitleFilter = filterSlice.actions.setTitleFilter;
export const { setTitleFilter, resetFilters } = filterSlice.actions;

// отдельные функции для выбора определенных частей состояния, чтобы не делать это в компонентах
export const selectTitleFilter = (state) => state.filter.title; // filter - название слайса, title - название свойства в состоянии

// редьюсер
export default filterSlice.reducer;
