// Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Home.css'; // Import your CSS file for additional styling

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Website</h1>
          
        <Link to="/certifications">
          <button className="btn">View All Certifications</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
