import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './auth.css';
import { useAuthContext } from '../../contexts/AuthContext';

function Copyright(props) {
  return (
    <div className="copyright" align="center" {...props}>
      {'Copyright © '}
      <Link style={{ color: 'black' }} to="/">
        Chronos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

function AuthPage() {
  const { user, register, login } = useAuthContext();

  const [showPass, setShowPass] = useState(false);

  const [isLogin, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
      displayName: data.get('displayName'),
      photoURL: data.get('photoURL'),
    };
    if (isLogin) {
      login(credentials);
    } else {
      register(credentials);
    }
  };

  if (user) {
    return <Navigate replace to="/" />;
  }

  return (
    <section className="login">
      <div>
        <div>
          <h1 className="sign"> {isLogin ? 'Sign in' : 'Create account'}</h1>

          <svg
            onClick={() => navigate('/')}
            className="backnav"
          >
            <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />{' '}
          </svg>
          <form onSubmit={handleSubmit}>
            {!isLogin ? (
              <div className="render-input">
                <input
                  className="signinp"
                  id="name"
                  placeholder="Name"
                  name="displayName"
                />
                <input
                  className="signinp"
                  id="photo"
                  placeholder="Avatar"
                  name="photoURL"
                />
              </div>
            ) : null}

            <input
              className="signinp"
              id="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
            />
            <input
              className="signinp"
              name="password"
              placeholder="Password"
              type={showPass ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
            />
            <div class="toggle-rect">
              <input
                checked={showPass}
                onChange={(e) => setShowPass(e.target.checked)}
                type="checkbox"
                id="rect1"
                name="check"
              />
              <label for="rect1"></label>
              <p>Show password</p>
            </div>

            <button className="btn-sign">
              {isLogin ? 'Sign in' : 'Create account'}
            </button>
            <div className="acc">
              <div>
                {isLogin ? (
                  <Link className="acc-pass">Forgot password?</Link>
                ) : null}
              </div>
              <div>
                <Link className="acc-pass" onClick={() => setLogin(!isLogin)}>
                  {isLogin
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Sign in'}
                </Link>
              </div>
            </div>
          </form>
        </div>
        <Copyright />
      </div>
    </section>
  );
}

export default AuthPage;
