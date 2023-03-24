import { RootState } from '../../interfaces/state';
export const getCategoryFromState = (state: RootState) =>
  state.categories.categories;
