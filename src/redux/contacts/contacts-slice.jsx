import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = {
  items: [],
  error: null,
  isLoading: false,
  filter: '',
};

const { actions, reducer } = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    fetchContactsRequest: state => {
      state.isLoading = true;
    },
    fetchContactsSuccess: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    fetchContactsError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    addContactRequest: state => {
      state.isLoading = true;
    },
    addContactSuccess: (state, { payload }) => {
      console.log(payload);
      state.items.push(payload);
      state.isLoading = false;
    },
    addContactError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    addContactGroupRequest: state => {
      state.isLoading = true;
    },
    addContactGroupSuccess: (state, { payload }) => {
      console.log(payload);
      state.items.push(payload);
      state.isLoading = false;
    },
    addContactGroupError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    deleteContactRequest: state => {
      state.isLoading = true;
    },
    deleteContactSuccess: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    deleteContactError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// eslint-disable-next-line
export default { actions, reducer };
