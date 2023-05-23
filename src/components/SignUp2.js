import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import users from './users.json';
import "./SignUp.css";

export default function Registration() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = input;

    // Check if user already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setErrorMessage('User already exists with the provided email');
      return;
    }

    // Create a new user object
    const newUser = {
      firstName,
      lastName,
      email,
      password
    };

    // Add the new user to the users array
    users.push(newUser);

    // Redirect to login page
    navigate('/Home');

    // Reset form inputs and error message
    setInput({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    setErrorMessage('');
  };

  return (
    <div>
      <div className="container">
        <h3 className="signup-heading">Signup</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 id='logo'>CLUBBOOK</h2>
          <input
            type="text"
            onChange={handleInputChange}
            name="firstName"
            value={input.firstName}
            placeholder="Enter your first name"
          />
          <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="lastName"
            value={input.lastName}
            placeholder="Enter your last name"
          />
          <br />
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            value={input.email}
            placeholder="Enter your email"
          />
          <br />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            value={input.password}
            placeholder="Enter your password"
          />
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to="/" className="login-link">Login page</Link>
      </div>
    </div>
  );
}