import React from 'react';
import '../stylesheets/layout/SavedActs.scss';
import { Link } from 'react-router-dom';
import { FaFileWord, FaFilePdf } from 'react-icons/fa';

const SavedActs = () => {
  const documents = [
    { id: 1, type: 'word', name: 'Acta N°1 en formato word' },
    { id: 2, type: 'pdf', name: 'Acta N°2 en formato pdf' },
    { id: 3, type: 'word', name: 'Acta N°3 en formato word' },
  ];

  return (
    <div className="saved-acts">
      <header className="header">
        <Link to="/home/perfil" className="profile-icon">👤</Link>
        <h1>Actas guardadas</h1>
        <p>Actas guardadas con éxito</p>
        <Link to="/home" className="close-icon">✖</Link>
      </header>
      <div className="document-list">
        {documents.map((doc) => (
          <div key={doc.id} className="document-card">
            <div className="icon">
              {doc.type === 'word' ? <FaFileWord size={40} /> : <FaFilePdf size={40} />}
            </div>
            <p>{doc.name}</p>
            <button className="favorite-icon">❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedActs;
