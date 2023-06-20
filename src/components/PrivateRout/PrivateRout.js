import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redax/auth/authSelector';

export const PrivateRout = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};
