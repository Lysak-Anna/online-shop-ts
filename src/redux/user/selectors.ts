import { RootState } from '../../interfaces/state';
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getUserInfo = (state: RootState) => state.user;
