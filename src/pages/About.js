import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const About = () => {
  return (
<div className='container-fluid my-3'>
        <div className="row">
        <div className="col-md-12">
        <div className='photo-card'><h2>About Madhavanji Hospital</h2></div>
        </div>
        <div className="col-md-6">
          <h4>
            Madhavanji Hospitals, located at Bhagwatipuram, is an integrated health
            campus where modern medicine and ancient medicine systems go hand in hand
            for the overall well-being of our patients at one place.
          </h4>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-6">
        <div className='photo-card'><h2>About Madhavanji Hospital</h2></div>
       

        </div>
        <div className="col-md-6">
          <h4>
            Madhavanji Hospitals, located at Bhagwatipuram, is an integrated health
            campus where modern medicine and ancient medicine systems go hand in hand
            for the overall well-being of our patients at one place.
          </h4>
        </div>
      </div> */}
    </div>
  );
};

export default About;
