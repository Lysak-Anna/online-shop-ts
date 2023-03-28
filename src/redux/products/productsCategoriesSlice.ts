import { createSlice } from '@reduxjs/toolkit';
const categoriesInitialState = {
  categories: 'all products',
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
export const { changeCategory }: any = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
