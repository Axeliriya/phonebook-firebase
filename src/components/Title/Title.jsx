import styles from './Title.module.css';
import PropTypes from 'prop-types';

export default function Title({ text, children }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{text}</h2>
      {children}
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
