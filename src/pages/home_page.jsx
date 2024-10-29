import React from 'react';
import '../stylesheets/layout/home_page.scss';
import { FaMicrophone, FaCalendarAlt, FaFileAlt, FaHeart, FaUser, FaClipboardList, FaFolder } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Hola [Nombre], ¿Qué te gustaría hacer ahora?</h2>
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <div className="features">
        <div className="feature-card">
          <FaMicrophone className="icon" />
          <p>Grabar reunión</p>
        </div>
        <div className="feature-card">
          <FaFileAlt className="icon" />
          <p>Audios guardados</p>
        </div>
        <div className="feature-card">
          <FaClipboardList className="icon" />
          <p>Actas guardadas</p>
        </div>
        <div className="feature-card">
          <FaHeart className="icon" />
          <p>Favoritos</p>
        </div>
        <div className="feature-card">
          <FaUser className="icon" />
          <p>Mi perfil</p>
        </div>
        <div className="feature-card">
          <FaCalendarAlt className="icon" />
          <p>Calendario</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

