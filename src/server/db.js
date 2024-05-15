// Initialize PouchDB
const db = new PouchDB('login-db');

// Function to register a new user
function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
  }

  // Function to hide the registration form
  function hideRegisterForm() {
    document.getElementById('registerForm').style.display = 'none';
  }

  function register() {
    const spireId = document.getElementById('newSpireId').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Generate a unique ID for the user
    const userId = `user:${spireId}:${Date.now()}`;
  
    const user = {
      _id: userId,
      spireId,
      password,
    };
  
    db.put(user)
      .then(() => {
        alert('Registration successful');
        hideRegisterForm();
        // Redirect to the login page or perform other actions
        window.location.href = 'login.html';
      })
      .catch((err) => {
        alert(`Error registering user: ${err}`);
      });
  }
  
  // Function to register a new user
  function register() {
    const spireId = document.getElementById('newSpireId').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Generate a unique ID for the user
    const userId = `user:${spireId}:${Date.now()}`;
  
    const user = {
      _id: userId,
      spireId,
      password,
    };
  
    db.put(user)
      .then(() => {
        alert('Registration successful');
        hideRegisterForm();
      })
      .catch((err) => {
        alert(`Error registering user: ${err}`);
      });
  }

// Function to login
function login() {
    const spireId = document.getElementById('spireId').value;
    const password = document.getElementById('password').value;
  
    db.get(`user:${spireId}`)
      .then((user) => {
        if (user.password === password) {
          alert('Login successful');
          // Redirect to the home page or perform other actions
        } else {
          alert('Incorrect password');
        }
      })
      .catch((err) => {
        if (err.name === 'not_found') {
          alert('User not found. Please register first.');
        } else {
          alert(`Error logging in: ${err}`);
        }
      });
  }
// Function to update password
function updatePassword() {
  const spireId = document.getElementById('spireId').value;
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPasswordUpdate').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  if (newPassword !== confirmNewPassword) {
    alert('New passwords do not match');
    return;
  }

  db.get(`user:${spireId}`)
    .then((user) => {
      if (user.password === currentPassword) {
        user.password = newPassword;
        return db.put(user);
      } else {
        throw new Error('Incorrect current password');
      }
    })
    .then(() => {
      alert('Password updated successfully');
      hideUpdatePasswordForm();
    })
    .catch((err) => {
      alert(`Error updating password: ${err}`);
    });
}