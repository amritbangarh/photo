const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON body

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/photobooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Booking Schema & Model
const bookingSchema = new mongoose.Schema({
  photographyType: String,
  retouching: String,
  formats: String,
  date: String,
  decision: String,
  budgetChoice: String,
  budgetRange: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// ✅ Define the /api/bookings POST route
app.post("/api/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// ✅ Define the /api/bookings GET route
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
