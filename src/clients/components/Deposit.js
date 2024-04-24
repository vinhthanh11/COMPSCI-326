// Deposit.js
import React, { useState } from 'react';
import '../styles/Deposit.css';

const Deposit = ({ onClose, isVisible }) => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
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
        <button className="deposit-submit">Deposit</button>
      </div>
    </div>
  );
};

export default Deposit;
