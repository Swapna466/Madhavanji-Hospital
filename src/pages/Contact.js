import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Contact = () => {
  return (
    <div className='container-fluid my-3'>
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card shadow p-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Contact Information</h2>
              <p><strong>Madhavanji Hospitals</strong></p>
              <p>At 24th KM, Srisailam Highway, AWARE Bhagwatipuram, Hyderabad, India</p>
              <p><strong>Website:</strong> <a href="http://aware-group.com/" target="_blank" rel="noopener noreferrer">aware-group.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@madhavanhospital.com">madhavanjihospitals@aware-group.com</a></p>
              <p><strong>Phone:</strong> <br />Hospital: +91-9866911662 <br /> WhatsApp: +91-8121761666</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
