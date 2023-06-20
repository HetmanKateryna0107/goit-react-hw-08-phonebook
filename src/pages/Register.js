import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redax/auth/authOperation';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
  };
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
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
