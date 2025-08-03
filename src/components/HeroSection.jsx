import React from 'react';
import "../styles/HeroSection.css";
import modelImage from "../assets/header.jpg";
import starIcon from "../assets/star.png"; // Star icon PNG (you provided)
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <section className="hero-section hero-container">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left: Text */}
          <div className="col-lg-6 text-start">
            <h1 className="hero-title mb-3">FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE</h1>
            <p className="hero-description">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="btn btn-dark px-4 py-2 rounded-pill mb-4">Shop Now</button>

            {/* Stats with vertical separators */}
            <div className="d-flex stats align-items-center text-center text-md-start">
              <div className="stat-item pe-4">
                <h2 className="fs-4 fw-bold">200+</h2>
                <p className="small text-muted">International Brands</p>
              </div>
              
              <div className="vertical-line"></div>
              <div className="stat-item px-4">
                <h2 className="fs-4 fw-bold">2,000+</h2>
                <p className="small text-muted">High-Quality Products</p>
              </div>
              <div className="vertical-line"></div>
              <div className="stat-item ps-4">
                <h2 className="fs-4 fw-bold">30,000+</h2>
                <p className="small text-muted">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 text-center position-relative">
            <img src={modelImage} alt="Models in style" className="img-fluid hero-image" />
            <img src={starIcon} alt="star" className="star-icon star-1" />
            <img src={starIcon} alt="star" className="star-icon star-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
