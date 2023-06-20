import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redax/auth/authOperation';

export const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
