import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../redux/user/selectors';
import { RouteProps } from '../interfaces/routes';
export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}: any) {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return <>{isUserLoggedIn ? <Navigate to={redirectTo} /> : Component}</>;
}
