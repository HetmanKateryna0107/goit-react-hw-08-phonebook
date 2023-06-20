import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redax/auth/authSelector';

import { fetchContacts, removeContacts } from 'redax/operations';
import { selectContacts, selectFilter } from 'redax/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuth]);
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filterContacts();
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(removeContacts(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
