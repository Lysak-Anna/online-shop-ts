import { createSlice } from '@reduxjs/toolkit';
const categoriesInitialState = {
  categories: 'all',
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    changeCategory(state, action) {
      state.categories = action.payload;
    },
  },
});
export const { changeCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
