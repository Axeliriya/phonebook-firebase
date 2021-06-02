import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { contactsSlice, contactsSelectors } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const onChange = e => {
    dispatch(contactsSlice.changeFilter(e.target.value));
  };

  return (
    <label className={styles.lable}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="name"
        value={filter}
        placeholder="Search name contact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onChange}
        autoComplete="off"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
