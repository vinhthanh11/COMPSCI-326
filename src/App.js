import logo from './clients/components/images/UniCash.svg';
import './clients/styles/App.css';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './clients/components/Navbar.js';
import Home from './clients/pages/Home.js';
import Investing from './clients/pages/Investing.js';
import Explore from './clients/pages/Explore.js';
import History from './clients/pages/History.js';
import Profile from './clients/pages/Profile.js';
import Mistake from './clients/pages/404.js';


function App() {
  return (
    <Router>
        <Navbar /> {/* Navbar is placed here, outside and independent of the Profile component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investing" element={<Investing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Mistake />} />
      </Routes>
    </Router>
  );
}


export default App;

