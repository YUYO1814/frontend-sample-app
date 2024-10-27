import React from 'react';
import '../stylesheets/layout/inicio_sesion.scss';

const InicioSesion = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/path/to/your/image.png" alt="Logo" className="login-logo" />
        <h2>Iniciar sesión</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="yuyito@example.com" required />

          <label>Contraseña</label>
          <input type="password" placeholder="********" required />

          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>

        <p>O usa tus redes sociales</p>
        <div className="social-buttons">
          <button className="google-button">Google</button>
          <button className="facebook-button">Facebook</button>
        </div>

        <div className="login-links">
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          <a href="/register">Registrarse</a>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;