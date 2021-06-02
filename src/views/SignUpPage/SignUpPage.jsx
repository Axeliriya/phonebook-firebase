import styles from './SignUpPage.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

export default function SignUpPage() {
  const dispatch = useDispatch();

  const onRegister = (email, password, name) =>
    dispatch(authOperations.register(email, password, name));

  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const [email, setEmail] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const [password, setPassword] = useState('');

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onRegister(email, password, name);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const signIn = routes.find(route => route.label === 'SignIn');

  return (
    <form
      className={styles.registration}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <hr className={styles.hr} />

        <label>
          <b>Name</b>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>
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
          Register
        </button>

        <hr className={styles.hr} />

        <div className="container signin">
          <p className={styles.problem}>
            Already have an account?{' '}
            <NavLink className={styles.link} to={`${signIn.path}`}>
              {signIn.label}
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
