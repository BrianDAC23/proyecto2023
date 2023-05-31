import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';
import '../CSS/login.css';


export function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  <div className="login-container-wrapper">
  <div className="login-container">
    {error && <Alert message={error} />}
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Iniciar sesión</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Ingrese su Email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="******"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary mt-3">Iniciar sesión</button>
      <h1 className='separacion'>O</h1>
      <button onClick={handleGoogleSignin} className="btn btn-dark mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>{" "}
        Iniciar sesión con Google
      </button>
      <p className="register-link mt-3">
        ¿No tienes cuenta? <a href="register">Regístrate</a>
      </p>
    </form>
  </div>
</div>


  );
}
