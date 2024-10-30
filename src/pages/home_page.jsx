import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/home_page.scss';
import { FaMicrophone, FaCalendarAlt, FaFileAlt, FaHeart, FaUser, FaClipboardList, FaFolder } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Hola [Nombre], ¿Qué te gustaría hacer ahora?</h2>
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <div className="features">
        <Link to="/home/grabar_reunion" className="feature-card">
          <FaMicrophone className="icon" />
          <p>Grabar reunión</p>
        </Link>
        <Link to="/home/audios_guardados" className="feature-card">
          <FaFileAlt className="icon" />
          <p>Reuniones guardadas</p>
        </Link>
        <Link to="/home/reunion_acta" className="feature-card">
          <FaFolder className="icon" />
          <p>Generar actas</p>
        </Link>
        <Link to="/home/acta_guardada" className="feature-card">
          <FaClipboardList className="icon" />
          <p>Actas guardadas</p>
        </Link>
        <Link to="/home/calendario" className="feature-card">
          <FaCalendarAlt className="icon" />
          <p>Calendario</p>
        </Link>
        <Link to="/home/perfil" className="feature-card">
          <FaUser className="icon" />
          <p>Mi perfil</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

