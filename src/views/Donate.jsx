import React, { useState } from 'react';
import '../views/Donate.css'; // Make sure to add the styles for this page

export default function DonatePage() {
  const [donorName, setDonorName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  const [catBreed, setCatBreed] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to the backend.
    alert('Donation details submitted successfully!');
  };

  return (
    <section className="donate-container">
      <h2 className="donate-title">Donate a Cat</h2>
      <p className="donate-description">
        Thank you for considering donating a cat to our adoption center. Please provide the details of the cat you wish to donate.
      </p>
      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donorName">Your Name</label>
          <input
            type="text"
            id="donorName"
            className="form-control"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Info (Phone or Email)</label>
          <input
            type="text"
            id="contactInfo"
            className="form-control"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Phone or Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="catName">Cat's Name</label>
          <input
            type="text"
            id="catName"
            className="form-control"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            placeholder="Cat's Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="catAge">Cat's Age</label>
          <input
            type="number"
            id="catAge"
            className="form-control"
            value={catAge}
            onChange={(e) => setCatAge(e.target.value)}
            placeholder="Cat's Age in years"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="catBreed">Cat's Breed</label>
          <input
            type="text"
            id="catBreed"
            className="form-control"
            value={catBreed}
            onChange={(e) => setCatBreed(e.target.value)}
            placeholder="Cat's Breed"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="healthStatus">Health Status</label>
          <textarea
            id="healthStatus"
            className="form-control"
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
            placeholder="Describe the cat's health (optional)"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="specialNeeds">Special Needs (if any)</label>
          <textarea
            id="specialNeeds"
            className="form-control"
            value={specialNeeds}
            onChange={(e) => setSpecialNeeds(e.target.value)}
            placeholder="Any special care the cat needs? (optional)"
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Submit Donation</button>
      </form>
    </section>
  );
}
