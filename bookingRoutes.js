const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// ✅ Get all bookings (to check if data is saved)
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Save new booking
router.post("/bookings", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // ✅ Log to check incoming data
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
