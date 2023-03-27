import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../redux/user/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}: any) {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return <>{!isUserLoggedIn ? <Navigate to={redirectTo} /> : Component}</>;
}
