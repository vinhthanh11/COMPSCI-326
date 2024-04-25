// ErrorPopup.js
import React from 'react';
import '../styles/Event.css';

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <p>{message}</p>
        <button onClick={onClose}>OK</button> {/* Make sure this calls the onClose prop */}
      </div>
    </div>
  );
};


export default ErrorPopup;
