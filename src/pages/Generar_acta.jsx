import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHourglass } from 'react-icons/ai'; // Importar el ícono de reloj de arena
import '../stylesheets/layout/generar_acta.scss';

const GenerarActa = () => {
  return (
    <div className="acta-reunion">
      <header className="navbar">
        {/* Aquí va tu código de Navbar */}
      </header>
      
      <div className="content">
        <h2>Generando acta de reunión...</h2>
        <div className="icon rotating"> {/* Agregamos la clase 'rotating' */}
          <AiOutlineHourglass size={80} color="#333" /> {/* Icono con tamaño y color */}
        </div>
        <p>
          El sistema está generando un acta de la reunión. Puedes regresar para cambiar la reunión o puedes guardar al finalizar el acta.
        </p>
        <div className="buttons">
          <Link to="/home/reunion_acta" className="back">Regresar</Link>
          <Link to="/home/acta_guardada" className="save">Guardar</Link>
        </div>
      </div>
    </div>
  );
};

export default GenerarActa;

