import React from 'react';
import '../stylesheets/layout/SavedMeetings.scss';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';

const ReunionActa = () => {
  const meetings = [
    { id: 1, type: 'mp4', name: 'Reunión N°1 de negocios.mp4' },
    { id: 2, type: 'wav', name: 'Reunión N°2 de negocios.wav' },
    { id: 3, type: 'mp3', name: 'Reunión N°1 de negocios.mp3' },
  ];

  return (
    <div className="saved-meetings">
      <header className="header">
        <Link to="/home/perfil" className="profile-icon">👤</Link>
        <h1>Selecciona una reunión</h1>
        <Link to="/home" className="close-icon">✖</Link>
      </header>
      <div className="meeting-list">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting-card">
            <div className="icon">
              <FaMicrophone size={40} />
            </div>
            <p>{meeting.name}</p>
            <button className="favorite-icon"></button>
            <Link to="/home/generar_acta" className="back">Seleccionar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReunionActa;
