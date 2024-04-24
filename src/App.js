import logo from './clients/components/images/UniCash.svg';
import './clients/styles/App.css';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './clients/pages/Home.js';
import Investing from './clients/pages/Investing.js';
import Explore from './clients/pages/Explore.js';
import History from './clients/pages/History.js';
import Profile from './clients/pages/Profile.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investing" element={<Investing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}


export default App;

