import { RootState } from '../../interfaces/state';
export const getProductFromState = (state: RootState) => state.cart.cart;
