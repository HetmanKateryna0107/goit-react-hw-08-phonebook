import axios from 'axios';

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
