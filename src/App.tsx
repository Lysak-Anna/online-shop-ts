import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            {/* <Route
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
            /> */}
            <Route path="product/:productId" element={<ProductPage />} />
            {/* <Route
              path="cart"
              element={
                <PrivateRoute redirectTo="/login" component={<Cart />} />
              }
            /> */}
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
