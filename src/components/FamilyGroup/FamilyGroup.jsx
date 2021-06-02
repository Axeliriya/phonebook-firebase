import styles from './FamilyGroup.module.css';
import { contactsSelectors } from '../../redux/contacts';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function FamilyGroup() {
  const [contacts, setContacts] = useState();
  const items = useSelector(contactsSelectors.getAllContacts);

  const handleClick = () => {
    setContacts(items);
  };

  const handleClickReset = () => {
    setContacts();
  };

  return (
    <div className={styles.list}>
      {!contacts ? (
        <button className={styles.group_item} onClick={handleClick}>
          <h3 className={styles.title}>Family</h3>
        </button>
      ) : (
        <>
          <div className={styles.group_arrow} onClick={handleClickReset}>
            <h3 className={styles.title}>Family</h3>
          </div>
          <ul className={styles.group_list}>
            {contacts.map(
              ({ group, ...contact }) =>
                group === 'family' && (
                  <ContactItem key={contact.id} contact={contact} />
                ),
            )}
          </ul>
        </>
      )}
    </div>
  );
}
