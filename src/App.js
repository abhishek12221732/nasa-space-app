// src/App.js
import React from 'react';
import './App.css';
import Exoplanet from './Exoplanet'; // 3D Exoplanet visualization
import { motion } from 'framer-motion'; // For animations

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay"></div>
        <div className="content">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            Explore Exoplanets
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Discover distant worlds and learn about the search for life.
          </motion.p>
          <a href="#explore" className="cta-btn">Start Exploring</a>
        </div>
      </header>

      {/* 3D Exoplanet Visualization */}
      <section id="explore" className="exoplanet-section">
        <h2>Navigate through Exoplanets</h2>
        <Exoplanet />
      </section>

      {/* Recent Discoveries Section */}
      <section className="discoveries">
        <h2>Recent Exoplanet Discoveries</h2>
        <motion.div
          className="discovery-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="card">
            <h3>Kepler-452b</h3>
            <p>Discovered in 2015, this planet is located 1,400 light years away from Earth.</p>
          </div>
          <div className="card">
            <h3>Proxima Centauri b</h3>
            <p>Closest exoplanet to Earth, orbiting Proxima Centauri, located 4.2 light years away.</p>
          </div>
        </motion.div>
      </section>

      {/* Build Your Own Exoplanet Section */}
      <section className="build-planet">
        <h2>Build Your Own Exoplanet</h2>
        <div className="controls">
          <label>Atmosphere Type:</label>
          <select>
            <option>Thin Atmosphere</option>
            <option>Thick Atmosphere</option>
            <option>None</option>
          </select>

          <label>Planet Size:</label>
          <input type="range" min="1" max="10" step="1" />
        </div>
        <div className="planet-preview">
          <img src="path/to/planet-image.png" alt="Planet Preview" />
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts">
        <h2>Did You Know?</h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          There are more exoplanets than stars in our galaxy! Explore them all now.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Exoplanet Explorer | NASA Space App Challenge</p>
      </footer>
    </div>
  );
}

export default App;
