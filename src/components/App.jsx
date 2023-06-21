import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redax/auth/authSelector';
import { PrivateRout } from './PrivateRout/PrivateRout';
import { PublicRout } from './PublicRout/PublicRout';
import { useEffect } from 'react';
import { getUser, logOut } from 'redax/auth/authOperation';
import { Phonebook } from 'pages/Contacts';
import UserMenu from './UserMenu';
// import { token } from 'redax/http';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      dispatch(getUser());
    }
  }, [isAuth, dispatch]);

  return (
    <>
      {isAuth ? (
        <UserMenu />
      ) : (
        <nav>
          <Link to={'/login'}>Login </Link>
          <Link to={'/register'}>Register</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Navigate to={'/contacts'} />} />
        <Route path="/" element={<PrivateRout />}>
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
        <Route path="/" element={<PublicRout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
