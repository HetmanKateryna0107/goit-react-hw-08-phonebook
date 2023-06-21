import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redax/auth/authSelector';

export const PublicRout = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to={'/contacts'} /> : <Outlet />;
};
