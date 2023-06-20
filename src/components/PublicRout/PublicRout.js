import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redax/auth/authSelector';

export const PublicRout = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={'/contacts'} /> : <Outlet />;
};
