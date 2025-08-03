import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPerson, BsCart, BsGrid } from 'react-icons/bs'; // Bootstrap Icons

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header container-fluid py-3 border-bottom">
      <div className="container">
      <div className="row align-items-center w-100 gx-3">
        {/* Logo */}
        <div className="col-6 col-md-2">
          <div className="logo fw-bold">ShoppNgo</div>
        </div>

        {/* Navigation */}
        <nav className="col-md-5 d-none d-md-block">
          <ul className="d-flex gap-4 mb-0 list-unstyled navigation">
            <li className="dropdown">
              <button className="dropbtn">Shop ▾</button>
              <div className="dropdown-content">
                <a href="#">All Products</a>
                <a href="#">Categories</a>
                <a href="#">Collections</a>
              </div>
            </li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
          </ul>
        </nav>

        {/* Search */}
        <div className="col-12 col-md-3 mt-2 mt-md-0">
          <div className="search-container">
            <input type="text" placeholder="Search for products..." />
          </div>
        </div>

        {/* Icons */}
        <div className="col-6 col-md-2 d-flex justify-content-end align-items-center gap-3 icons">
          <BsGrid className="icon" onClick={() => navigate('/dashboard')}/>
          <BsPerson className="icon" />
          <BsCart className="icon" />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
