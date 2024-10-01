import React from 'react';


const Footer = () => {
  return (
   <div className='footer'>
      <p>&copy; 2024 Madhavanji Hospital. All rights reserved.</p>
      <div className="social-media">
  <a
    href="https://www.facebook.com/profile.php?id=61561008617327&mibextid=JRoKGi"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="fab fa-facebook-f"></i>
  </a>
  <a
    href="https://www.youtube.com/@awaregroup"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginLeft: "10px" }} >
    <i className="fab fa-youtube"></i>
  </a>

        <a href="https://x.com/Arogyadham_2024?t=aEoojZdwQFNfBNTmS-z4lg&s=09" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/_aware_group_?igsh=OWtsNWFsZW1jcHE=" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/madhu-madhavan-178800278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      </div>
  );
}

export default Footer;
