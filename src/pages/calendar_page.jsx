import React, { useState } from 'react';
import '../stylesheets/layout/calendar_page.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  // State to hold the selected date
  const [date, setDate] = useState(new Date());
  // State to hold the events for different dates
  const [events, setEvents] = useState({
    '2024-10-15': 'Reunión con el equipo de marketing 5:00pm',
    '2024-10-16': 'Revisión del proyecto AI 8:00am',
    '2024-10-26': 'Presentación mensual de resultados 12:00 pm'
  });
  // State to control the visibility of the event form
  const [showForm, setShowForm] = useState(false);
  // State to hold new event details
  const [newEvent, setNewEvent] = useState({ date: '', description: '' });

  // Function to handle adding a new event
  const handleAddEvent = () => {
    setShowForm(true);
    setNewEvent({ ...newEvent, date: date }); // Set initial date to the selected date in the calendar
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedDate = newEvent.date.toISOString().split('T')[0];
    setEvents({ ...events, [formattedDate]: newEvent.description });
    setShowForm(false);
    setNewEvent({ date: '', description: '' });
  };

  return (
    <div className="calendar-page">
      <h2>Calendario de Reuniones</h2>
      <button className="add-event-button" onClick={handleAddEvent}>Agregar Evento</button>
      
      {showForm && (
        <form className="event-form" onSubmit={handleFormSubmit}>
          <label>Fecha del evento:</label>
          <input
            type="date"
            value={newEvent.date ? newEvent.date.toISOString().split('T')[0] : ''}
            onChange={(e) => setNewEvent({ ...newEvent, date: new Date(e.target.value) })}
            required
          />
          <label>Descripción:</label>
          <input
            type="text"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
          <button type="submit" className="submit-event-button">Guardar Evento</button>
        </form>
      )}

      <Calendar
        onChange={(selectedDate) => {
          setDate(selectedDate);
          setNewEvent({ ...newEvent, date: selectedDate }); // Update the date in the form when selecting from the calendar
        }}
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
