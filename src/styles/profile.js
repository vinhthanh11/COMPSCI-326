// Function to open the deposit modal
function openDepositModal() {
    // Set the content of the modal
    document.getElementById('payment-method').innerHTML = `
    <option value="choose">Please Choose</option>
    <option value="credit-card">Credit Card</option>
    <!-- Add more account options as needed -->

    `;
  
    // Set the content of the To Account selection
    document.getElementById('to-account').innerHTML = `
    <option value="choose">Please Choose</option>
    <option value="student-debt-plan">Student Debt Plan</option>
    <option value="dining-dollars">Dining Dollars</option>
    <option value="investing">Investing</option>
  `;
  
    // Display the modal
    document.getElementById('deposit-modal').style.display = 'block';
  }
  
  // Function to close the deposit modal
  function closeDepositModal() {
    document.getElementById('deposit-modal').style.display = 'none';
  }
  
  // Event listener for the deposit button
  document.querySelector('.deposit-btn').addEventListener('click', openDepositModal);
  
  // Event listener for the close button (if you have one in your modal)
  document.querySelector('.close-modal').addEventListener('click', closeDepositModal);
  