import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Locations = () => {
  return (
    <div className='container-fluid my-3'>
      <h1 className="text-center mb-4">Madhavanji Hospital Locations</h1>
      
      {/* Map Section */}
      <section className="container my-5 mb-5">  
        <h3 className="text-center">Find Us Here:</h3>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="map-responsive">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2955468767627!2d78.5075755!3d17.1358046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbaf00141ff15b%3A0x79559f3c388d36e0!2sMadhavanji%20Hospitals!5e0!3m2!1sen!2sin!4v1695623485064!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{ border: 50 }} 
                allowFullScreen=''
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations List Section */}
      {/* <section>
        <h3 className="text-center mb-4">Our Branches</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Main Branch - Hyderabad</h5>
                <p className="card-text">
                  <b>Address:</b> 123 Arogya Dham Road, Srisailam Highway, Hyderabad<br />
                  <b>Phone:</b> +91-123-456-7890<br />
                  <b>Email:</b> contact@hospital.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Branch - Bangalore</h5>
                <p className="card-text">
                  <b>Address:</b> 456 Health Avenue, Whitefield, Bangalore<br />
                  <b>Phone:</b> +91-987-654-3210<br />
                  <b>Email:</b> blr@hospital.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Branch - Mumbai</h5>
                <p className="card-text">
                  <b>Address:</b> 789 Wellness Street, Andheri, Mumbai<br />
                  <b>Phone:</b> +91-567-890-1234<br />
                  <b>Email:</b> mumbai@hospital.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Locations;
