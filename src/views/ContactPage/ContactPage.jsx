import styles from './ContactPage.module.css';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export default function ErrorPage() {
  const home = routes.find(route => route.label === 'Home');
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <h1>Number</h1>
        <div className={styles.signin}>
          <p>
            You can go back to the{' '}
            <NavLink className={styles.link} to={`${home.path}`}>
              {home.label}
            </NavLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
