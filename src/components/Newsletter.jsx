import React from 'react';
import '../styles/Newsletter.css';
import { Mail } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        <div className="row align-items-center">
          {/* Left column: Heading */}
          <div className="col-12 col-md-6 text-md-start text-center mb-4 mb-md-0">
            <h2 className="newsletter-heading">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h2>
          </div>

          {/* Right column: Form */}
          <div className="col-12 col-md-6">
            <div className="newsletter-form">
              <div className="input-wrapper">
                <Mail className="mail-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="email-input"
                />
              </div>
              <button className="subscribe-btn">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
