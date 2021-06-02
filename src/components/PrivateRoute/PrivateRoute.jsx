import styles from './PrivetPoute.module.css';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isLoggedOn = useSelector(authSelectors.getLoggedOn);
  const isLoading = useSelector(authSelectors.getLoading);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoading ? (
          <div className={styles.spinner}>
            <Loader type="Rings" color="#999999" height={80} width={80} />
          </div>
        ) : isLoggedOn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
