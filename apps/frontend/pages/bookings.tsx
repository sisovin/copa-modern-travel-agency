import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/bookings.css';

const BookingsPage = () => {
  const [reservations, setReservations] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/api/reservations');
        setReservations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleCancel = async (reservationId) => {
    try {
      await axios.delete(`/api/reservations/${reservationId}`);
      setReservations(reservations.filter((reservation) => reservation.id !== reservationId));
    } catch (error) {
      console.error('Error cancelling reservation:', error);
    }
  };

  const filteredReservations = reservations.filter((reservation) =>
    reservation.destination.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bookings-container">
      <h2>Bookings Management</h2>
      <input
        type="text"
        placeholder="Filter by destination"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {loading ? (
        <p>Loading reservations...</p>
      ) : (
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.destination}</td>
                <td>{reservation.date}</td>
                <td>
                  <button onClick={() => handleCancel(reservation.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingsPage;
