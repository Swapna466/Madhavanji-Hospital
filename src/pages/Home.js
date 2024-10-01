import React from 'react';
import Services from './Services';


const Home = () => {
  return (
    <div className='container-fluid my-5'>
      <div className='row'>
        {/* Image Section */}
        <div className="col-md-6 position-relative">
          {/* Doctor image */}
          <img src="/doctor5.jpeg" alt="doctor5" className="img-fluid rounded shadow" />
        </div>

        {/* Text Section */}
        <div className='col-md-6'> 
          <h1 className="display-4 font-weight-bold mb-4">About Madhavanji Hospital</h1>

          <a href="https://youtu.be/mMdp76DfLXI?si=_BLiiJHmIW-L4gZp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-3">
            <b>Watch Video of MADHAVANJI Hospital</b>
          </a>

          <blockquote className='blockquote text-secondary my-4'>
            <b>"MADHAVANJI SUPER MULTI SPECIALITY HOSPITAL - TIME AND HEALTH ARE PRECIOUS ASSETS THAT WE DON'T RECOGNISE AND APPRECIATE UNTIL THEY HAVE BEEN DEPLETED"</b>
          </blockquote>

          <p className="lead">
            Humanist <b className='text-primary'>Pujyashri Madhavanji</b> strives for a society where truth, dharma, and justice prevail, aiming for everyone to live 120 years with health, wisdom, and virtue.
          </p>

         
        </div>

        {/* List Section */}
        <div className='col-md-12'>
          
          {/* <ul className="list-group list-group-flush my-4"> */}
             <p className="text-muted">
            Founder of AWARE, Pujyashri Madhavanji, has uplifted 30 lakh downtrodden rural families over the last 50 years in 9000 villages of India. In his honor, AWARE initiated a health revolution by starting <b className='text-primary'>AROGYA DHAM</b>, <b>an Integrated Health City</b>, in a 100-acre campus at AWARE Bhagwathipuram, Hyderabad.
          </p>

          <p className="text-muted">
            This innovative Integrated Health City offers hospitals for all medical disciplines in one campus. The salient features of the Arogya Dham are:
          </p>
            {/* <li className="list-group-item">600-bed multi-super speciality <b className='text-primary'>Madhavanji Hospitals</b> with state-of-the-art medical technology.</li>
            <li className="list-group-item">200-bed AYUSH standard <b className='text-primary'>Madhavanji Ayurvedic Hospital</b>.</li>
            <li className="list-group-item">200-bed <b className='text-primary'>Madhavanji Unani Hospital</b> with AYUSH standards.</li>
            <li className="list-group-item">International standard <b className='text-primary'>Madhavanji Homoeo Hospital</b>.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Wellness Centre</b> with comprehensive health standards.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Yoga Training Centre</b> for holistic health education.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Ayush Research Centre</b>, innovating modern alternative health therapies.</li>
            <li className="list-group-item"><b className='text-primary'>Modern Medical Shop</b> offering medicines from all disciplines.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Diagnostic Centre</b> with international-standard equipment.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Medical College</b> with international standards of teaching.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Nursing College</b>, producing healthcare warriors.</li>
            <li className="list-group-item"><b className='text-primary'>Madhavanji Organic Products Sales Centre</b>, connecting nature and man.</li>
            <li className="list-group-item"><b className='text-primary'>Helicopter Ambulance Service</b> for emergency services and medical tourism.</li>
          </ul> */}
          <Services/>
          
        </div>

        {/* Footer Section */}
        <div className='col-md-12 my-4 text-center'>
          <p className="text-muted">
            For more details, visit <b>AWARE-Group</b> <a href='http://aware-group.com/' target='_blank' rel='noopener noreferrer' className='text-info'>official website</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
