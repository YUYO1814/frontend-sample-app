import React from 'react';
import '../stylesheets/layout/home_page.scss';
import { FaMicrophone, FaCalendarAlt, FaFileAlt, FaHeart, FaUser, FaClipboardList } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Hola [Nombre], ¿Qué te gustaría hacer ahora?</h1>
      <div className="search-container">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="feature-icons">
        <div className="feature-card">
          <FaMicrophone className="icon" />
          <p>Grabar reunión</p>
        </div>
        <div className="feature-card">
          <FaClipboardList className="icon" />
          <p>Lista de archivos</p>
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
          <FaFileAlt className="icon" />
          <p>Generar actas</p>
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
