import styles from './SignInPage.module.css';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function SignInPage() {
  const dispatch = useDispatch();

  const onSignIn = (email, password) =>
    dispatch(authOperations.logIn(email, password));

  const [email, setEmail] = useState('axeliriya@mail.ru');

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const [password, setPassword] = useState('Gala123!');

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSignIn(email, password);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const signUp = routes.find(route => route.label === 'SignUp');

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <div>
        <h1>LogIn</h1>
        <p>Please fill in this form to login an account.</p>

        <hr className={styles.hr} />

        <label>
          <b>Email</b>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label>
          <b>Password</b>
          <input
            className={styles.form_input}
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button type="submit" className={styles.btn}>
          SignIn
        </button>

        <hr className={styles.hr} />

        <div className="container signin">
          <p className={styles.problem}>
            Don't have an account yet?{' '}
            <NavLink className={styles.link} to={`${signUp.path}`}>
              {signUp.label}
            </NavLink>
            .
          </p>
        </div>
      </div>
    </form>
  );
}

// MoviesPage.propTypes = {
//   search: PropTypes.string,
//   movies: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   error: PropTypes.object,
// };
