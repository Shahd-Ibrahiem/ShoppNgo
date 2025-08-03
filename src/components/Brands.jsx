import React from 'react';
import "../styles/Brands.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Versace from "../assets/Versace.png";
import Zara from "../assets/Zara.png";
import Gucci from "../assets/Gucci.png";
import Prada from "../assets/Prada.png";
import Calvin from "../assets/Calvin.png";

const Brands = () => {
  const brands = [Versace, Zara, Gucci, Prada, Calvin];

  return (
    <section className="brands-section py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center gx-5 gy-3">
          {brands.map((brand, index) => (
            <div key={index} className="col-4 col-md-2">
              <img src={brand} alt={`Brand ${index}`} className="img-fluid brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
