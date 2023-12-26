import React from 'react';
import '../styles/Hero.css'; 

export const Hero = () => {
  return (
    <div className="hero-section">
      <p className="hero-welcome">WELCOME</p>
      <h1 className="hero-title">I am Beto,</h1>
      <h1 className='hero-subtitle'>full stack developer based in Phoenix, Arizona.</h1>
      <p className="hero-description">
        Dedicated to crafting well-engineered and creative online solutions that empower my clients to achieve greater business success and online engagement.
      </p>
    </div>
  );
};