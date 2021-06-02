import styles from './UserNav.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { routes } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/img/avatar.jpg';
import logo from '../../assets/img/logo-pen.png';
import { authOperations, authSelectors } from '../../redux/auth';
import { useState } from 'react';

export default function Navigation() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const [profile, setProfile] = useState(false);

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };

  const handleClick = () => {
    setProfile(!profile);
  };

  return (
    <nav className={styles.navigation}>
      <Container>
        <ul className={styles.list}>
          {routes.map(
            ({ path, label, userNav }) =>
              userNav &&
              label === 'Home' && (
                <li className={styles.item} key={label}>
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.link_active}
                    exact
                    to={`${path}`}
                  >
                    <div className={styles.wrapper}>
                      <img
                        // className={styles.avatar}
                        src={logo}
                        alt="Avatar"
                        width={100}
                      />
                    </div>
                  </NavLink>
                </li>
              ),
          )}
          <li>
            <div className={styles.wrapper}>
              <button className={styles.button} onClick={handleClick}>
                <img
                  className={styles.avatar}
                  src={avatar}
                  alt="Avatar"
                  width={60}
                />
              </button>
              {profile && (
                <div className={styles.profile}>
                  <span className={styles.greeting}> Hello, {userName} </span>

                  {routes.map(
                    ({ path, label, userNav }) =>
                      userNav &&
                      label === 'Phonebook' && (
                        <li className={styles.item} key={label}>
                          <NavLink
                            className={styles.link}
                            activeClassName={styles.link_active}
                            exact
                            to={`${path}`}
                          >
                            <div className={styles.wrapper}>{label}</div>
                          </NavLink>
                        </li>
                      ),
                  )}
                  <hr className={styles.hr} />

                  <button
                    className={styles.logout}
                    type="button"
                    onClick={onLogOut}
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
