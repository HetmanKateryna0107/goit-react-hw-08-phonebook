import { Contacts } from 'components/Contacts/Contacs';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import React from 'react';

export const Phonebook = () => {
  return (
    <>
      <h3>Phonebook</h3>
      <Form />

      <h3>Contacts</h3>
      <h4>Find contacts by name</h4>

      <Filter />

      <Contacts />
    </>
  );
};
