import React, { useState } from 'react';
import '../stylesheets/layout/calendar_page.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  // State to hold the selected date
  const [date, setDate] = useState(new Date());
  // State to hold the events for different dates
  const [events] = useState({
    '2024-10-15': 'Reunión con el equipo de marketing 5:00pm',
    '2024-10-16': 'Revisión del proyecto AI 8:00am',
    '2024-10-26': 'Presentación mensual de resultados 12:00 pm'
  });

  return (
    <div className="calendar-page">
      <h2>Calendario de Reuniones</h2>
      <div className="add-event-container" style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button className="add-event-button styled-button">Agregar Evento</button>
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => {
          const dateString = date.toISOString().split('T')[0];
          return events[dateString] ? 'event-day' : null;
        }}
      />
      {events[date.toISOString().split('T')[0]] && (
        <div className="event-tooltip">
          <p>{events[date.toISOString().split('T')[0]]}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
