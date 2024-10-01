import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='head'>
      <nav>
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>

        {/* About Dropdown */}
        <div className="dropdown">
  <Link to="/about" className="dropbtn">About</Link>
  <div className="dropdown-content">
    <a href="http://aware-group.com/" target="_blank" rel="noopener noreferrer">
      AWARE-group
    </a>
    <Link to="/about/aboutmadhavanjihospital">Madhavanji Hospital</Link>
    <Link to="/about/founder">Founder & Chairman</Link> 
  </div>
</div>


        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/events">Events</Link>
        {/* <Link to="/medicalcamp">Medicalcamp</Link> */}

        {/* Hospitals Dropdown */}
        <div className="dropdown">
          <Link to="/hospitals" className="dropbtn">Hospitals</Link>
          <div className="dropdown-content">
            <a href="https://www.gleneagleshospitals.co.in/gleneagles-aware-hospital-lb-nagar-hyderabad" target="_blank" rel="noopener noreferrer">
              AWARE-Hospital in L.b nagar
            </a>       
            
            <Link to="/hospitals/orissa">Mohana in Orissa</Link>
            
            <Link to="/hospitals/padakal">Padakal in Telangana</Link>
            <Link to="/hospitals/kammam">Khammam in Telangana</Link>
            <Link to="/hospitals/chinnapuram">Chinnapuram in A.P</Link>

          </div>
        </div>

        <Link to="/locations">Location</Link>
      </nav>

      <div className="container-fluid">
  <div className="row align-items-center">

    <div className="col-12">
      <div className="mx-3 my-3">
        <img src="madhavanji-logo-2.jpeg" alt="Madhavanji Hospital" className="img-fluid" />
      </div>
    </div>

   
    {/* <div className="col-12">
      <img src="madhavan-logo.jpg" alt="Madhavan Hospital" className="logo-header" />
    </div> */}
  </div>
</div>

      
    </div>
  );
}

export default Header;
