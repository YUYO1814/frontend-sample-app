// ProfileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/ProfileMenu.scss';

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="profile-menu__header">
        <Link to="/home" className="profile-menu__close">✖️</Link>
        <div className="profile-menu__avatar">👤</div>
        <h2 className="profile-menu__name">[Nombre]</h2>
      </div>

      <div className="profile-menu__options">
        <MenuItem icon="👤" text="Información Personal" />
        <MenuItem icon="📅" text="Calendario" />
        <MenuItem icon="🎙️" text="Grabaciones guardadas" />
        <MenuItem icon="❤️" text="Actas guardadas" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <div className="menu-item">
    <span className="menu-item__icon">{icon}</span>
    <span className="menu-item__text">{text}</span>
    <span className="menu-item__arrow">➡️</span>
  </div>
);

export default ProfileMenu;
