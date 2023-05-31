import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';
import '../CSS/login.css';


export function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

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
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Ingrese su Email" onChange={handleChange} />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="******"/>

                <button>Login</button>
            </form>
        </div>
    );
}
