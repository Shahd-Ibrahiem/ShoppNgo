import React, { useEffect, useState } from 'react';
import '../styles/TopSelling.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TopSelling = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://6880175ef1dcae717b610c29.mockapi.io/api/ShahdIbrahiem/ShoppNgo/products')
      .then((res) => {
        const filtered = res.data.filter((product) => product.status === 'Top Selling');
        setTopProducts(filtered);
      });
  }, []);

  return (
    <section className="top-selling">
      <div className="container text-center">
        <h2 className="section-title">TOP SELLING</h2>
        <div className="product-grid">
          {topProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="rating">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span>{product.rating}/5</span>
              </div>
              <div className="price">
                {product.originalPrice !== product.finalPrice ? (
                  <>
                    <span className="old-price">${product.originalPrice}</span>
                    <span className="current-price">${product.finalPrice}</span>
                    <span className="discount">{product.discount}%</span>
                  </>
                ) : (
                  <span className="current-price">${product.finalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="view-all mt-4">View All</button>
      </div>
    </section>
  );
};

export default TopSelling;
