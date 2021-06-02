// import PropTypes from 'prop-types';
import styles from './PhonebookPage.module.css';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Title from '../../components/Title';
import Filter from '../../components/Filter';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch } from 'react-redux';

export default function PhonebookPage() {
  const dispatch = useDispatch();
  const getFetchContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    getFetchContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.phonebook}>
      <>
        <Title text="Add contact">
          <ContactForm />
        </Title>

        <Title text="All contacts">
          <Filter />

          <ContactList />
        </Title>
      </>
    </div>
  );
}

// PhonebookPage.propTypes = {
//   title: PropTypes.string,
//   poster_path: PropTypes.string,
//   overview: PropTypes.string,
//   genres: PropTypes.arrayOf(PropTypes.object),
//   loading: PropTypes.bool,
//   vote_average: PropTypes.number,
// };
