import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutFounder = () => {
  return (
    <div className="container my-5">
       <div className="col-md-12">
       {/* <h1>About Founder</h1> */}
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 photo-card-about img">
          <img 
            src="/madhavanji-1.jpg" 
            alt="Medical Camp" 
            className="img-fluid-F shadow" 
            // style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">       
          <p style={{ textAlign: 'justify' }}>
          Dr. P.K.S. Madhavan is the founder of AWARE (Action for Welfare and Awakening in Rural Environment), 
          a nonprofit dedicated to uplifting marginalized communities, including tribals and Dalits.
           A lifelong bachelor, Dr. Madhavan devoted his life to social justice after witnessing
           extreme poverty and exploitation during his research on the Chenchu tribes in Hyderabad in 1975.<br></br>
          </p>

          <p style={{ textAlign: 'justify' }}>
          Land Rights Movement (1988): Spearheaded a protest of 200,000 individuals to successfully protect
           600,000 acres of tribal land from exploitation.
          </p>

          <p style={{ textAlign: 'justify' }}>
          Landless Poor Convention (1988): Organized a convention for 250,000 landless individuals,\
           influencing the creation of the National Employment Guarantee Scheme.
          </p>

          <p style={{ textAlign: 'justify' }}>
          Bonded Labor Liberation: Instrumental in the release and rehabilitation 
          of over 32,000 bonded laborers, 
          empowering them to fight for their rights.
          </p>

          <p style={{ textAlign: 'justify' }}>
          Land Reclamation: Reclaimed 44,000 acres of illegally occupied land, 
          redistributing it to over 51,000 impoverished families.
          </p>

          <p style={{ textAlign: 'justify' }}>
          Legal Advocacy: Appointed three times as a Supreme Court Commissioner to 
          investigate bonded labor issues and atrocities 
          against Dalits in Andhra Pradesh.
          </p>

          <p style={{ textAlign: 'justify' }}>
          National Committees: Served on various national initiatives, 
           the National Technology Mission and the United Nations High Commission for Refugees.
          </p>
          

        </div>
      </div>
      </div>

      {/* Full Page Quote Section */}
      <div className="row my-5">
        <div className="col-md-12 text-center">
          <blockquote className="blockquote">
            
          <p style={{ textAlign: 'justify' }}>
          Dr. Madhavan integrates humanitarian efforts with spiritual teachings, 
          having lectured in 28 countries and mastering eight languages. 
          He continues to work tirelessly, dedicating 18 hours a day to support and empower those in need.
          </p>
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
