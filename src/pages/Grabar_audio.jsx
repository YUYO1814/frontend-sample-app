import React, { useState, useEffect } from 'react';
import '../stylesheets/layout/grabar_audio.scss';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaPause, FaPlay } from 'react-icons/fa';

const GrabarReunion = () => {
  const [isRecording, setIsRecording] = useState(true); // Estado de grabación o pausa
  const [seconds, setSeconds] = useState(0); // Tiempo de grabación en segundos

  // Temporizador para contar el tiempo de grabación
  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  // Función para alternar entre grabación y pausa
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  // Formato de tiempo en mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grabar-reunion">
      <div className="navbar">
        {/* Aquí podrías agregar el navbar si es parte de tu diseño */}
      </div>
      <div className="content">
        <h2>Grabación en Proceso...</h2>

        {/* Icono de micrófono animado */}
        <div className={`icon ${isRecording ? 'recording' : ''}`}>
          <FaMicrophone size={60} />
        </div>

        {/* Temporizador */}
        <p>{formatTime(seconds)}</p>
        <p>
         El sistema está grabando el audio de la reunión. Puedes pausar o detener la grabación en cualquier momento.
        </p>
        {/* Botones de pausa y reanudar */}
        
        <div className="buttons">
          {isRecording ? (
            <button onClick={toggleRecording} className="pause">
              <FaPause /> Pausar
            </button>
          ) : (
            <button onClick={toggleRecording} className="play">
              <FaPlay /> Reanudar
            </button>
          )}
          {/* Botón de detener (opcional) */}
          <Link to="/home/audios_guardados" className="stop">Detener</Link>
        </div>
      </div>
    </div>
  );
};

export default GrabarReunion;

