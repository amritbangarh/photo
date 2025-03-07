import React, { useState } from "react";

const PhotographerPopup = () => {
  const [formData, setFormData] = useState({
    photographyType: "Birthday",
    retouching: "Yes",
    formats: "CD/DVD",
    date: "2025-03-01",
    decision: "Ready",
    budgetChoice: "Yes",
    budgetRange: "£100-£199",
  });

  const [step, setStep] = useState(1);
  const totalSteps = 7;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save booking");

      const data = await response.json();
      console.log("✅ Booking saved:", data);
      alert("Booking successfully saved!");
      setStep(1); // Reset form after submission
    } catch (error) {
      console.error("❌ Error saving booking:", error);
      alert("Failed to save booking.");
    }
  };

  return (
    <div className="popup">
      <h2>Step {step} of {totalSteps}</h2>

      {step === 1 && (
        <div>
          <label>Photography Type:</label>
          <select name="photographyType" onChange={handleChange} value={formData.photographyType}>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Event">Event</option>
          </select>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Retouching Required:</label>
          <select name="retouching" onChange={handleChange} value={formData.retouching}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Preferred Formats:</label>
          <select name="formats" onChange={handleChange} value={formData.formats}>
            <option value="CD/DVD">CD/DVD</option>
            <option value="USB Drive">USB Drive</option>
            <option value="Cloud Storage">Cloud Storage</option>
          </select>
        </div>
      )}

      {step === 4 && (
        <div>
          <label>Date of Event:</label>
          <input type="date" name="date" onChange={handleChange} value={formData.date} />
        </div>
      )}

      {step === 5 && (
        <div>
          <label>Decision:</label>
          <select name="decision" onChange={handleChange} value={formData.decision}>
            <option value="Ready">Ready</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      )}

      {step === 6 && (
        <div>
          <label>Do you have a Budget?</label>
          <select name="budgetChoice" onChange={handleChange} value={formData.budgetChoice}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      )}

      {step === 7 && (
        <div>
          <label>Budget Range:</label>
          <select name="budgetRange" onChange={handleChange} value={formData.budgetRange}>
            <option value="£100-£199">£100-£199</option>
            <option value="£200-£499">£200-£499</option>
            <option value="£500+">£500+</option>
          </select>
        </div>
      )}

      <div>
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < totalSteps ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default PhotographerPopup;
