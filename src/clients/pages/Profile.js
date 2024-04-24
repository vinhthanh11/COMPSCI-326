// Profile.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Deposit from '../components/Deposit.js'; // Make sure the path
import '../styles/Profile.css';
import profilePic from '../components/images/sample_profile.png'; // Assuming there's an image in the public/images folder

const Profile = () => {
    const [isDepositVisible, setDepositVisible] = useState(false);

    const handleDepositClick = () => {
      setDepositVisible(true);
    };
  
    const handleCloseDeposit = () => {
      setDepositVisible(false);
    };



  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-photo"/>
        <h1 className="profile-name">John Doe</h1>
      </div>
      <div className="info-section">
        <div className="account-section">
          <h2>Accounts</h2>
        <div className="account-details">
          <div className="account-item">Student Debt Plan <span>$100.68</span></div>
          <div className="account-item">Dining Dollars <span>$125.33</span></div>
          <div className="account-item">Investing <span>$12.10</span></div>
          <div className="account-item">UMLIMITED DC <span>463 Meals</span></div>
        </div>
        <button className="deposit-button" onClick={handleDepositClick}>Deposit</button>
      </div>
      <div className="news-section">
        <h2>News</h2>
        <p>UMass Amherst Introduces Vegan BBQ Jackfruit Tacos and Gluten-Free Sweet Potato Waffles to...</p>
        </div>
      </div>
      <Deposit isVisible={isDepositVisible} onClose={handleCloseDeposit} />
    </div>
  );
}

export default Profile;
