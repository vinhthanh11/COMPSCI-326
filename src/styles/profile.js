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

// Function to open the withdrawal modal
function openWithdrawModal() {
    // Set the content of the From Account selection
    document.getElementById('from-account').innerHTML = `
      <option value="choose">Please Choose</option>
      <option value="student-debt-plan">Student Debt Plan</option>
      <option value="dining-dollars">Dining Dollars</option>
      <option value="investing">Investing</option>
    `;
  
    // Display the withdrawal modal
    document.getElementById('withdraw-modal').style.display = 'block';
  }
  
  // Function to close the withdrawal modal
  function closeWithdrawModal() {
    document.getElementById('withdraw-modal').style.display = 'none';
  }
  
  // Event listener for the withdraw button
  document.querySelector('.withdraw-btn').addEventListener('click', openWithdrawModal);
  
  // Event listener for the close button (if you have one in your modal)
  document.querySelector('.close-modal').addEventListener('click', closeWithdrawModal);
  
  var withdrawButton = document.getElementById('withdraw-button');
  
  // Add click event listener to the withdraw button
  withdrawButton.addEventListener('click', function() {
    // Get the value from the withdrawal amount input field
    var withdrawalAmount = parseFloat(document.getElementById('withdraw-amount').value);
  
    // Get the selected option from the "From Account" select field
    var fromAccountSelect = document.getElementById('from-account');
    var selectedOption = fromAccountSelect.options[fromAccountSelect.selectedIndex].value;
  
    // Update the balance based on the selected account
    switch(selectedOption) {
      case 'student-debt-plan':
        updateBalance('student-debt', -withdrawalAmount);
        break;
      case 'dining-dollars':
        updateBalance('dining-dollars', -withdrawalAmount);
        break;
      case 'investing':
        updateBalance('investing', -withdrawalAmount);
        break;
      default:
        // Handle default case or error if needed
        break;
    }
  
    // Close the withdrawal modal
    closeWithdrawModal();
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


// Function to retrieve and display the user data
async function displayUserData() {
  const spireId = sessionStorage.getItem('spireId');
  const userName = sessionStorage.getItem('userName');

  if (spireId && userName) {
      try {
          const user = await db.get(`user:${spireId}`);
          const userInfo = `Fullname: ${userName}, SPIRE ID: ${spireId}`;
          document.getElementById('userInfo').textContent = userInfo;
          document.getElementById('student-debt').textContent = user.balances.studentDebt.toFixed(2);
          document.getElementById('dining-dollars').textContent = user.balances.diningDollars.toFixed(2);
          document.getElementById('investing').textContent = user.balances.investing.toFixed(2);
          document.getElementById('unlimited-dc').textContent = user.balances.unlimitedDC.toFixed(2);
      } catch (err) {
        
      }
  } else {
      window.location.href = '/';
  }
}

// Call the displayUserData function when the page loads
window.onload = displayUserData;


// Function to handle logout
function logout() {
  // Clear session storage
  sessionStorage.removeItem('spireId');
  sessionStorage.removeItem('userName');
  // Redirect to the login page
  window.location.href = '/';
}

function deleteProfile() {
  // Retrieve the user's spireID from session storage
  const spireId = sessionStorage.getItem('spireId');

  if (spireId) {
      // Confirm the action with the user
      const confirmDelete = confirm("Are you sure you want to delete your profile? This action cannot be undone.");

      if (confirmDelete) {
          // Delete the user document from PouchDB
          db.get(`user:${spireId}`)
              .then(user => db.remove(user))
              .then(() => {
                  alert('Profile deleted successfully');
                  // Clear session storage
                  sessionStorage.removeItem('spireId');
                  sessionStorage.removeItem('userName');
                  // Redirect to the login page
                  window.location.href = '/';
              })
              .catch(err => {
                  console.error('Error deleting profile:', err);
                  alert('Error deleting profile. Please try again.');
              });
      }
  } else {
      console.error('User information not found in session storage');
      alert('Error deleting profile. Please log in again.');
      // Redirect to the login page
      window.location.href = '/';
  }
}

