import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import FavoritesGroup from '../../components/FavoritesGroup';
import FamilyGroup from '../../components/FamilyGroup';
import FriendsGroup from '../../components/FriendsGroup';
import WorksGroup from '../../components/WorksGroup';
import OthersGroup from '../../components/OthersGroup';
import { authSelectors } from '../../redux/auth';

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoggedOn = useSelector(authSelectors.getLoggedOn);
  const getFetchContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    getFetchContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.homepage}>
      {isLoggedOn ? (
        <>
          <FavoritesGroup />
          <FamilyGroup />
          <FriendsGroup />
          <WorksGroup />
          <OthersGroup />
        </>
      ) : (
        <div>login</div>
      )}

      {/* <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={phonebook}
          alt="phonebook"
          width={200}
        />
        <h1>Your Phonebook</h1>
      </div> */}
    </div>
  );
}
