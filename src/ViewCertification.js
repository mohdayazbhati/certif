// ViewCertification.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './ViewCertification.css'; // Import your CSS file for additional styling

function ViewCertification({ certification }) {
  return (
    <div className="certification-container">
      <h2>{certification.name}</h2>
      <img src={certification.image} alt={certification.name} className="certification-image" />
      {/* Add other details of the certification here */}
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewCertification;
