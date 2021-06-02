import styles from './ContactForm.module.css';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const [name, setName] = useState('');

  const handleInputChangeName = event => {
    setName(event.currentTarget.value);
  };

  const [number, setNumber] = useState('');

  function handleInputChangeNumber(event) {
    setNumber(event);
  }

  const [group, setGroup] = useState('');

  function toggleChecked(event) {
    setGroup(event.target.value);
  }

  const onSubmit = contact => {
    dispatch(contactsOperations.addContact(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name,
      number: replaceNum,
      group,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const replaceNum =
    number.length === 11
      ? number.replace(
          /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          '+$1 ($2) $3-$4-$5',
        )
      : number.replace(
          /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
          '+$1 ($2) $3-$4-$5',
        );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Name</span>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleInputChangeName}
          required
        />
      </label>

      <label className={styles.label}>
        <span>Phone</span>
        <PhoneInput
          country="ru"
          preferredCountries={['ru', 'ua']}
          value={number}
          onEnterKeyPress={handleSubmit}
          containerStyle={{ width: 240 }}
          inputStyle={{ width: 240 }}
          onChange={event => handleInputChangeNumber(event)}
        />
      </label>

      <label>
        Favorites
        <input
          type="radio"
          value="favorites"
          name="group"
          onChange={toggleChecked}
        />
        <span></span>
      </label>

      <label>
        Family
        <input
          type="radio"
          value="family"
          name="group"
          onChange={toggleChecked}
        />
        <span></span>
      </label>

      <label>
        Friends
        <input
          type="radio"
          value="friends"
          name="group"
          onChange={toggleChecked}
        />
        <span></span>
      </label>

      <label>
        Works
        <input
          type="radio"
          value="works"
          name="group"
          onChange={toggleChecked}
        />
        <span></span>
      </label>

      <label>
        Others
        <input
          type="radio"
          value="others"
          name="group"
          onChange={toggleChecked}
          defaultChecked
        />
        <span></span>
      </label>

      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
