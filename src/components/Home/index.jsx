import React from 'react';
import './home.css';
import Footer from '../Footer';
const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>
        <p>Your one-stop solution for everything you need.</p>
      </div>
      <Footer />

    </div>
  );
};

export default Home;
