import React, { useEffect, useState } from 'react';
import '../styles/NewArrivals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://6880175ef1dcae717b610c29.mockapi.io/api/ShahdIbrahiem/ShoppNgo/products')
      .then((res) => {
        const filtered = res.data.filter((product) => product.status === 'New');
        setNewProducts(filtered);
      });
  }, []);

  return (
    <section className="new-arrivals">
      <div className="container text-center">
        <h2>NEW ARRIVALS</h2>
        <div className="product-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="rating">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span>{product.rating}/5</span>
              </div>
              <div className="price">
                <span className="current">${product.finalPrice}</span>
                {product.originalPrice !== product.finalPrice && (
                  <>
                    <span className="original">${product.originalPrice}</span>
                    <span className="discount">{product.discount}%</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="view-all mt-4">View All</button>
        <hr className="section-divider" />
      </div>
    </section>
  );
};

export default NewArrivals;
