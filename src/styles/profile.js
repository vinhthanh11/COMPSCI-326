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

var depositButton = document.getElementById('deposit-button');

// Add click event listener to the deposit button
depositButton.addEventListener('click', function() {
    // Get the value from the deposit amount input field
    var depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    
    // Get the selected option from the "To Account" select field
    var toAccountSelect = document.getElementById('to-account');
    var selectedOption = toAccountSelect.options[toAccountSelect.selectedIndex].value;
    
    console.log(selectedOption)

    // Update the balance based on the selected account
    switch(selectedOption) {
        case 'student-debt-plan':
            updateBalance('student-debt', depositAmount);
            break;
        case 'dining-dollars':
            updateBalance('dining-dollars', depositAmount);
            break;
        case 'investing':
            updateBalance('investing', depositAmount);
            break;
        default:
            // Handle default case or error if needed
            break;
    }
    
    // Close the modal
    closeModal();
});

// Function to update the balance
function updateBalance(accountId, depositAmount) {
    var accountElement = document.getElementById(accountId);
    var currentBalance = parseFloat(accountElement.innerHTML) || 0;
    var newBalance = currentBalance + depositAmount;
    accountElement.innerHTML = newBalance.toFixed(2);
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('deposit-modal');
    modal.style.display = 'none';
}