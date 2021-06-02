import { apiService } from '../../service/service-api';
import { toast } from 'react-toastify';
import { contactsSlice } from '.';

const fetchContacts = () => async dispatch => {
  dispatch(contactsSlice.actions.fetchContactsRequest());

  try {
    const querySnapshot = await apiService.getFetchContacts();
    const contacts = [];

    querySnapshot.forEach(doc => {
      const contact = {
        id: doc.id,
        name: doc.data().name,
        number: doc.data().number,
        group: doc.data().group,
      };
      contacts.push(contact);
    });
    dispatch(contactsSlice.actions.fetchContactsSuccess(contacts));
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(contactsSlice.actions.addContactRequest());

  try {
    await apiService.addContact(contact);
    dispatch(contactsSlice.actions.addContactSuccess(contact));
    console.log(contact);
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsSlice.actions.deleteContactRequest());

  try {
    await apiService.deleteContact(contactId);
    dispatch(contactsSlice.actions.deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(error.message);
    dispatch(contactsSlice.actions.deleteContactError(error.message));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
