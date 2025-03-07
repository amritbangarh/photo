const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  photographyType: String,
  retouching: String,
  formats: String,
  date: String,
  decision: String,
  budgetChoice: String,
  budgetRange: String
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
