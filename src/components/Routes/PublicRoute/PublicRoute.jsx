import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { isUserLoggedIn } from '../../../redux/selectors';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log(isLoggedIn);
  console.log(children);
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>;
};

export default PublicRoute;