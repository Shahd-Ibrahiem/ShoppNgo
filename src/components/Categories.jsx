import React from 'react';
import '../styles/Categories.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import casualImg from '../assets/casual.png';
import formalImg from '../assets/formal.png';
import partyImg from '../assets/party.png';
import gymImg from '../assets/gym.png';

const categories = [
  { title: 'Casual', image: casualImg },
  { title: 'Formal', image: formalImg },
  { title: 'Party', image: partyImg },
  { title: 'Gym', image: gymImg },
];

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <h2 className="categories-title">Browse by Dress Style</h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {categories.map((cat, index) => (
            <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="category-card">
                <img src={cat.image} alt={cat.title} className="category-img" />
                <span className="category-label">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
