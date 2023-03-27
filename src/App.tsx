import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Account from './pages/Account';
import NotFound from './components/NotFound';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="account"
              element={
                <PrivateRoute redirectTo="/login" component={<Account />} />
              }
            />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route
              path="cart"
              element={
                <PrivateRoute redirectTo="/login" component={<Cart />} />
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
