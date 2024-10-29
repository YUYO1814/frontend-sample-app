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

  // Function to handle hover over dates and extract event info
  const getEventInfo = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return events[dateString] ? events[dateString] : null;
  };

  return (
    <div className="calendar-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', minHeight: '100vh' }}>
      <h2>Calendario de Reuniones</h2>
      <div className="add-event-container" style={{ marginBottom: '20px', textAlign: 'right', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <button className="add-event-button styled-button">Agregar Evento</button>
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => {
          const dateString = date.toISOString().split('T')[0];
          return events[dateString] ? 'event-day' : null;
        }}
        onClickDay={(value) => setDate(value)}
        style={{ width: '70%', maxWidth: '800px' }}
      />
      {getEventInfo(date) && (
        <div className="event-tooltip" style={{ marginTop: '20px', backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '4px' }}>
          <p>{getEventInfo(date)}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
