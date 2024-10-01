import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutFounder = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6">
          <img 
            src="/madhavanji.jfif" 
            alt="Medical Camp" 
            className="img-fluid rounded shadow" 
            style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h1 className="mb-4">About Founder</h1>
          <p style={{ textAlign: 'justify' }}>
            Dr. P.K.S. Madhavan, the visionary behind AWARE, has devoted his entire life to the upliftment of tribals, harijans, and the poorest in society. Born to Sri Konghot Karunakaran and Smt Parichpulli Kamakshmma of the Puthucode Royal Family, Dr. Madhavan pursued anthropology before dedicating himself to the service of the most disadvantaged.
          </p>
          <p style={{ textAlign: 'justify' }}>
            After resigning from the civil service, he spent four years as a wandering monk in the Himalayas. He later returned home and began his work with Chenchu tribes. Witnessing the oppression and exploitation of tribals, he founded AWARE to empower rural communities. He remains deeply spiritual and teaches Indian Heritage, Upanishads, and Vedas.
          </p>
        </div>
      </div>

      {/* Full Page Quote Section */}
      <div className="row my-5">
        <div className="col-md-12 text-center">
          <blockquote className="blockquote">
            <p className="mb-0">
              "I shall work for an India in which the poorest shall feel that it is their country... in which all communities shall live in perfect harmony." - Mahatma Gandhi
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
