import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import PhotographerPopup from "../components/PhotographerPopup";

const BookingDashboard = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings");
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setBookings(data);
      console.log("📌 Bookings:", data);
    } catch (error) {
      console.error("❌ Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Photographer Booking Dashboard</h1>

      <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
        Find a Photographer
      </Button>

      {openPopup && (
        <PhotographerPopup
          open={openPopup}
          onClose={() => setOpenPopup(false)}
          onBookingComplete={fetchBookings}
        />
      )}

      <h2>Selected Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <strong>Type:</strong> {booking.photographyType} | 
              <strong> Retouching:</strong> {booking.retouching} | 
              <strong> Format:</strong> {booking.formats} | 
              <strong> Date:</strong> {booking.date} | 
              <strong> Decision:</strong> {booking.decision} | 
              <strong> Budget:</strong> {booking.budgetRange}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings yet</p>
      )}
    </div>
  );
};

export default BookingDashboard;
