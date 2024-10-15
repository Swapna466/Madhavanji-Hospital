import React from 'react';
import Services from './Services';
import AboutFounder from './AboutFounder';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div className='col-md-12 my-5'>
      <div className='row'>
      <h1 className="head-title">Madhavanji Hospital</h1>

        <div className="card col-md-5 mx-3">
        
          <img src="/doctor5.jpeg" alt="doctor5" className="img-fluid" />
        </div>
        
        <div className='card col-md-6'>
          

          <a href="https://youtu.be/mMdp76DfLXI?si=_BLiiJHmIW-L4gZp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-3">
            <b>Watch Video of MADHAVANJI Hospital</b>
          </a>

          <blockquote className='text my-4'>
            <b>"MADHAVANJI SUPER MULTI SPECIALITY HOSPITAL - TIME AND HEALTH ARE PRECIOUS ASSETS THAT WE DON'T RECOGNISE AND APPRECIATE UNTIL THEY HAVE BEEN DEPLETED"</b>
          </blockquote>

          <p className="lead">
            Humanist <b className='text'>Pujyashri Madhavanji</b> strives for a society where truth, dharma, and justice prevail, aiming for everyone to live 120 years with health, wisdom, and virtue.
          </p>
          <p className="lead">
            Founder of AWARE, Pujyashri Madhavanji, has uplifted 30 lakh downtrodden rural families over the last 50 years in 9000 villages of India. In his honor, AWARE initiated a health revolution by starting <b className='text'>AROGYA DHAM</b>, <b>an Integrated Health City</b>, in a 100-acre campus at AWARE Bhagwathipuram, Hyderabad.
          </p> 
          </div>
      {/* <img src="madhavan-logo.jpg" alt="Madhavan Hospital" className="logo-home" /> */}

         
        </div>
        {/* <div className='card col-md-12'> 

          <a href="https://youtu.be/mMdp76DfLXI?si=_BLiiJHmIW-L4gZp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mb-3">
            <b>Watch Video of MADHAVANJI Hospital</b>
          </a>

          <blockquote className='text my-4'>
            <b>"MADHAVANJI SUPER MULTI SPECIALITY HOSPITAL - TIME AND HEALTH ARE PRECIOUS ASSETS THAT WE DON'T RECOGNISE AND APPRECIATE UNTIL THEY HAVE BEEN DEPLETED"</b>
          </blockquote>

          <p className="lead">
            Humanist <b className='text'>Pujyashri Madhavanji</b> strives for a society where truth, dharma, and justice prevail, aiming for everyone to live 120 years with health, wisdom, and virtue.
          </p>
          <p className="lead">
            Founder of AWARE, Pujyashri Madhavanji, has uplifted 30 lakh downtrodden rural families over the last 50 years in 9000 villages of India. In his honor, AWARE initiated a health revolution by starting <b className='text'>AROGYA DHAM</b>, <b>an Integrated Health City</b>, in a 100-acre campus at AWARE Bhagwathipuram, Hyderabad.
          </p> 

         
        </div> */}

        {/* List Section */}
        <div className='space col-md-12'>
          
          {/* <ul className="list-group list-group-flush my-4"> */}
           

          {/* <p className="text-muted">
            This innovative Integrated Health City offers hospitals for all medical disciplines in one campus. The salient features of the Arogya Dham are:
          </p> */}
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
          <div className='space'>
            
            {/* <ul className="list-group list-group-flush my-4">
               <li className="list-group-item">600-bed multi-super speciality <b className='text-primary'>Madhavanji Hospitals</b> with state-of-the-art medical technology.</li>
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
          </ul>  */}
 <div className='col-md-12 my-4 text-center'>
          <div className='our-H text-center'>
          <h1>Our Services</h1>
          <Services/>
          </div>
          </div>
         
          
          <div className='col-md-12 my-4 text-center'>
          <div className='our-H text-center'>
          <h1>Our Hospitals</h1>
              <div className='photo-card-H'>
   
    
    <div className='row'>
      {/* First Row with 3 images */}
      <div className='col-md-4'>
        <div className="photo-card-y">
          <img src="/gleanegles.jpg" alt="AWARE-Gleneagle" className="img-fluid-Hospitals" />
          <p><b>AWARE-Gleneagle</b></p>
          <h6><b>Description:</b> Doctors comforting disabled elderly patient at hospital</h6>
        </div>
      </div>

      <div className='col-md-4 mb-4'>
        <div className="photo-card-y">
          <img src="/padkal.jpeg" alt="Padkal" className="img-fluid-Hospitals" />
          <p><b>Padkal</b></p>
          <h6><b>Description:</b> Doctors comforting disabled elderly patient at hospital</h6>
        </div>
      </div>

      <div className='col-md-4 mb-4'>
        <div className="photo-card-y">
          <img src="/kamalapur.jpg" alt="Kamalapur" className="img-fluid-Hospitals" />
          <p><b>Kamalapur</b></p>
          <h6><b>Description:</b> Doctors comforting disabled elderly patient at hospital</h6>
        </div>
      </div>
    </div>

    {/* Second Row with 3 images */}
    <div className='row'>
      <div className='col-md-4 mb-4'>
        <div className="photo-card-y">
        <img src="/padkal.jpeg" alt="Padkal" className="img-fluid-Hospitals" />
        <p><b>Khammam</b></p>
          <h6><b>Description:</b> Doctors comforting disabled elderly patient at hospital</h6>
        </div>
      </div>

      <div className='col-md-4 mb-4'>
        <div className="photo-card-y">
        <img src="/padkal.jpeg" alt="Padkal" className="img-fluid-Hospitals" />
        <p><b>Chinnapuram</b></p>
          <h6><b>Description:</b> Doctors comforting disabled elderly patient at hospital</h6>
        </div>
      </div>

      
      </div>
    </div>
  </div>
</div>


          <div className='col-md-12 mb-4 text-center'>
            <h1>Location:</h1>
            <div className='photo-card'>
            <div className="map-responsive">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2955468767627!2d78.5075755!3d17.1358046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbaf00141ff15b%3A0x79559f3c388d36e0!2sMadhavanji%20Hospitals!5e0!3m2!1sen!2sin!4v1695623485064!5m2!1sen!2sin"
                width="95%" 
                height="100%" 
                style={{ borderRadius: 25}} 
                allowFullScreen=''
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
            </div>
            </div>


        {/* Footer Section */}
        <div className='col-md-12 text-center'>
          <h1>About Founder</h1>
          
            <div className='col-md-12 my-4'>
          <div className='photo-card'>
        <AboutFounder />

<div>


<Carousel>
  <Carousel.Item>
    <div className="carousel-images">
      <img src="/madhavan-img-10.jpg" alt="madhavan-img-10" className="madhava-img mx-2" />
      <img src="/madhavan-img-11.jpg" alt="madhavan-img11" className="madhava-img mx-2" />
      <img src="/madhavan-img-12.jpg" alt="madhavan-img12" className="madhava-img mx-2" />
      <img src="/madhavan-img-13.jpg" alt="madhavan-img13" className="madhava-img mx-2" />
      <img src="/madhavan-img-15.jpg" alt="madhavan-img15" className="madhava-img mx-2" />
    </div>
    <Carousel.Caption>
      <p>Description of the first slide.</p>
    </Carousel.Caption>
  </Carousel.Item>

  
      <Carousel.Item>
        <div className="carousel-images">
          <img src="/madhavan-img-1.jpg" alt="madhavan-img-1" className="madhava-img" />
          <img src="/madhavan-img-2.jpg" alt="madhavan-img-2" className="madhava-img" />
          <img src="/madhavan-img-3.jpg" alt="madhavan-img-3" className="madhava-img" />
          <img src="/madhavan-img2.jpg" alt="madhavan-img2" className="madhava-img" />
          <img src="/madhavan-img-4.jpg" alt="madhavan-4" className="madhava-img" />
        </div>
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description of the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

  <Carousel.Item>
    <div className="carousel-images">
    <img src="/madhavan-img-5.jpg" alt="madhavan-5" className="madhava-img" />
    <img src="/madhavan-img-6.jpg" alt="madhavan-6" className="madhava-img" />
    <img src="/madhavan-img-7.jpg" alt="madhavan-7" className="madhava-img" />
    <img src="/madhavan-img-8.jpg" alt="madhavan-8" className="madhava-img" />
    <img src="/madhavan-img-9.jpg" alt="madhavan-9" className="madhava-img" />

    </div>
    {/* Add caption if needed */}
  </Carousel.Item>
</Carousel>

 



        
        
            For more details, visit <b>AWARE-Group</b> <a href='http://aware-group.com/' target='_blank' rel='noopener noreferrer' className='text-info'>official website</a>.
          
        </div>
           </div>
      </div>
    </div>
    </div>
   
    </div>
    </div>
  );
};

export default Home;
