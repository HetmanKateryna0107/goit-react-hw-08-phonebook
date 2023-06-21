import { useDispatch } from 'react-redux';
import React from 'react';
import { logOut } from 'redax/auth/authOperation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
