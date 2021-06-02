import styles from './AuthNav.module.css';
import logo from '../../assets/img/logo-pen.png';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';

export default function AuthNav() {
  return (
    <nav className={styles.navigation}>
      <Container>
        <ul className={styles.list}>
          {routes.map(
            ({ path, label, authNav }) =>
              authNav && (
                <li className={styles.item} key={label}>
                  <NavLink
                    className={
                      label === 'SignIn' ? styles.login_link : styles.link
                    }
                    activeClassName={
                      label === 'SignIn'
                        ? styles.login_link
                        : styles.link_active
                    }
                    exact
                    to={`${path}`}
                  >
                    {label === 'Home' ? (
                      <div className={styles.wrapper}>
                        <img
                          // className={styles.avatar}
                          src={logo}
                          alt="Avatar"
                          width={100}
                        />
                      </div>
                    ) : (
                      label
                    )}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </Container>
    </nav>
  );
}
