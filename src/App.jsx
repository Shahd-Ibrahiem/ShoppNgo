import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Brands from './components/Brands';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import CategoriesSection from './components/Categories.jsx';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <CategoriesSection />
      <Newsletter />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;