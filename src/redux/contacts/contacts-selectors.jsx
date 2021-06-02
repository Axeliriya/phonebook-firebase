import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.isLoading;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  },
);

// eslint-disable-next-line
export default { getAllContacts, getFilter, getLoading, getVisibleContacts };
