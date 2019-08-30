import React, { useState } from 'react';
import Container from '../../components/layout/container/container.component';
import './sign-up.styles.scss';

const SignUp = props => {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [error, setError] = useState(null);

  const { email, password1, password2 } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (password1 !== password2) return setError('Passwords do not match!');
    console.log(formData);
  };

  return (
    <div className="sign-up-page">
      <Container>
        <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit} className="main-form">
          <div className="main-form__section">
            <label htmlFor="email" className="main-form__section__label">
              Email:
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="main-form__section__text-field"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="main-form__section">
            <label htmlFor="password1" className="main-form__section__label">
              Password:
            </label>
            <input
              required
              type="password"
              name="password1"
              id="password1"
              className="main-form__section__text-field"
              value={password1}
              onChange={handleChange}
            />
          </div>
          <div className="main-form__section">
            <label htmlFor="password2" className="main-form__section__label">
              Confirm Password:
            </label>
            <input
              required
              type="password"
              name="password2"
              id="password2"
              className="main-form__section__text-field"
              value={password2}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="main-form__section">
              <p className="main-form__section__error">{error}</p>
            </div>
          )}
          <div className="main-form__section">
            <button type="submit" className="main-form__section__button">
              Sign Up
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
