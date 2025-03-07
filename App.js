import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingDashboard from "./pages/BookingDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
