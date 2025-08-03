import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5">
      <div className="container">
        
        {/* Footer Links */}
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">ShoppNgo</h5>
            <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="social-icons d-flex gap-3">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold">FAQ</h6>
            <ul className="list-unstyled">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top">
          <p className="mb-2 mb-md-0">ShoppNgo © 2000-2023, All Rights Reserved</p>
          <div className="payment-icons d-flex gap-3">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" height="30" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" height="30" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" height="30" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" height="30" />
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" height="30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
