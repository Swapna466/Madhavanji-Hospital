import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
  return (
    <div className='container-fluid my-3'>
      <h1 className="text-center mb-5">Hospital Events</h1>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Health Camp 1</h5>
                <p className="card-text">
                  Join us for a free health camp offering consultations with top doctors.
                </p>
                <p className="card-text"><small className="text-muted">Date: </small></p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Health Camp 2 </h5>
                <p className="card-text">
                Join us for a free health camp offering consultations with top doctors.                </p>
                <p className="card-text"><small className="text-muted">Date: </small></p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Health Camp 3</h5>
                <p className="card-text">
                Join us for a free health camp offering consultations with top doctors.                </p>
                <p className="card-text"><small className="text-muted">Date: </small></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Past Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="medicalcamp1.jpg" className="card-img-top" alt="Health Camp 1" />
              <div className="card-body">
                <h5 className="card-title">Health Camp 1</h5>
                <p className="card-text">
We conducted Health Camp at MADHAVANJI HOSPITAL                </p>
                <p className="card-text"><small className="text-muted">Held on: <b></b>January 30th </small></p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
            <img src="medicalcamp2.jpg" className="card-img-top" alt="Health Camp 2" />
            {/* <img src="healthcamp1.jpg" className="card-img-top" alt="Health Camp 1" /> */}

              <div className="card-body">
                <h5 className="card-title">Heath Camp 2</h5>
                <p className="card-text">
                We conducted Health Camp 2 at MADHAVANJI HOSPITAL                </p>
                
                <p className="card-text"><small className="text-muted">Held on: February 24th</small></p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
            <img src="medicalcamp1.jpg" className="card-img-top" alt="Health Camp 1" />
            <div className="card-body">
                <h5 className="card-title">Health Camp 3</h5>
                <p className="card-text">
                We conducted Health Camp 3 at MADHAVANJI HOSPITAL                </p>

                <p className="card-text"><small className="text-muted">Held on: March 27th </small></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
