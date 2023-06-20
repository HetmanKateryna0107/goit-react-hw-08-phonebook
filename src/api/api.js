import axios from 'axios';

axios.defaults.baseURL = 'https://648c81708620b8bae7ed04fd.mockapi.io/';

export const getContacts = async () => {
  const { data } = await axios.get('contacts');

  return data;
};
export const postContacts = async newContact => {
  const { data } = await axios.post('contacts', newContact);

  return data;
};
export const deleteContacts = async contactId => {
  const { data } = await axios.delete('contacts/' + contactId);

  return data;
};
