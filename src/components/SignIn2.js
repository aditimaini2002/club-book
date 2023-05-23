import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import users from './users.json';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find user by email
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // User login successful
      setErrorMessage('');
      navigate('/Home'); // Redirect to homepage
    } else {
      // User login failed
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
              ClubBook
            </NavLink>
          </h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
           Not have Account <NavLink to='/SignUp'>Click Here</NavLink> 
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;