import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { logOut } from 'redax/auth/authOperation';
import { selectUser } from 'redax/auth/authSelector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user?.email}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
