export interface CartItem {
  id: number;
  title: string;
  price: number;
  count: number;
}
export interface User {
  email: string;
  token: string;
  id: string;
  isLoggedIn: boolean;
}
export interface RootState {
  cart: CartItem[];
  categories: {
    categories: string;
  };
  user: User;
}
