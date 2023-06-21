import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redax/auth/authSelector';

export const PrivateRout = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to={'/login'} />;
};
