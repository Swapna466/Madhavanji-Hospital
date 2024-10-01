import React from 'react';
import { Link } from 'react-router-dom';

const Hospitals = () => {
  return (
    <div className="dropdown">
      <Link to="/about" className="dropbtn">Hospitals</Link>
      <div className="dropdown-content">
        <a href="http://aware-group.com/" target="_blank" rel="noopener noreferrer">
          About Aware-Hospital Karmanghat
        </a>
        <Link to="/about/team">About Madhavanji Hospital</Link>
        <Link to="/about/mission">About Author and Founder</Link>
      </div>
    </div>
  );
}

export default Hospitals;
