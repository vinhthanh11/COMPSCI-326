// Deposit.js
import React, { useState } from 'react';
import ErrorPopup from './Event.js';
import '../styles/Deposit.css';

const Deposit = ({ onClose, isVisible }) => {
    const [amount, setAmount] = useState('');
    const [showError, setShowError] = useState(false);
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleDepositSubmit = () => {
        // Assuming the amount is a string, parse it to a number first
        const numericAmount = parseFloat(amount);
        if (numericAmount < 5) {
          // Show error if the amount is less than 5
          setShowError(true);
        } else {
          // Close the deposit box if needed or continue with the deposit process
          onClose(); // Uncomment this if you want to close the deposit box after successful deposit
        }
      };
      
      const handleCloseError = () => {
        setShowError(false);
      };
      
    
    if (!isVisible) return null;
  

  return (
    <div className="deposit-overlay" onClick={onClose}>
      <div className="deposit-box" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Payment Method</h2>
        <select name="payment-method" className="deposit-input">
          <option>Please Choose</option>
          {/* Additional options here */}
        </select>
        <h2>To Account</h2>
        <select name="to-account" className="deposit-input">
          <option>Please Choose</option>
          {/* Additional options here */}
        </select>
        <div className="amount-display">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="amount-input"
            placeholder="$0.00"
          />
        </div>
        <div className="minimum-notice">
          $5 minimum
        </div>
        {/* Add functionality for processing deposit */}
        <button className="deposit-submit" onClick={handleDepositSubmit}>Deposit</button>
      </div>
      {showError && (
        <ErrorPopup message="Not enough. Minimum deposit is $5." onClose={handleCloseError} />
      )}
    </div>
  );
};

export default Deposit;
