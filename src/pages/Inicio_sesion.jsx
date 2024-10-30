import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/layout/inicio_sesion.scss';
import logo from '../assets/logo.png';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Redirige a /home al completar los campos
      navigate('/home');
    }
  };

  const handleSocialLogin = () => {
    // Redirige a /home al usar redes sociales
    navigate('/home');
  };

  const isButtonDisabled = !email || !password;

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="login-button"
            disabled={isButtonDisabled}
          >
            Iniciar sesión
          </button>
        </form>

        <p>O usa tus redes sociales</p>
        <div className="social-buttons">
          <button
            className="google-button"
            onClick={handleSocialLogin}
          >
            Google
          </button>
          <button
            className="facebook-button"
            onClick={handleSocialLogin}
          >
            Facebook
          </button>
        </div>

        <div className="login-links">
          <a href="/forgot-password">¿Olvidaste tu contraseña? </a>
          <a href="/register">Registrarse</a>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
