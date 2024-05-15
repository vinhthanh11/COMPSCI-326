// Initialize PouchDB
const db = new PouchDB('login-db');

// Function to show the registration form
function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
}

// Function to hide the registration form
function hideRegisterForm() {
    document.getElementById('registerForm').style.display = 'none';
}

// Function to show the forgot password form
function showForgotPasswordForm() {
    document.getElementById('forgotPasswordForm').style.display = 'block';
}

// Function to hide the forgot password form
function hideForgotPasswordForm() {
    document.getElementById('forgotPasswordForm').style.display = 'none';
}

// Function to register a new user
function register() {
    const spireId = document.getElementById('newSpireId').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const name = document.getElementById('newName').value;

    // Validate that the name is not a number
    if (!isNaN(name)) {
        alert('Name cannot be a number');
        return;
    }

    // Validate that the SPIRE ID is a number
    if (isNaN(spireId)) {
        alert('SPIRE ID must be a number');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Generate a unique ID for the user
    const userId = `user:${spireId}`;
    const user = {
        _id: userId,
        spireId,
        password,
        name,
        balances: {
            studentDebt: 0,
            diningDollars: 0,
            investing: 0,
            unlimitedDC: 0
        }
    };

    db.put(user)
        .then(() => {
            alert('Registration successful');
            hideRegisterForm();
        })
        .catch(err => {
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
                window.location.href = '/home';
                sessionStorage.setItem('spireId', spireId);
                sessionStorage.setItem('userName', user.name); // Store the user's name in session storage
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

// Function to reset password
function resetPassword() {
    const spireId = document.getElementById('resetSpireId').value;
    const newPassword = document.getElementById('resetNewPassword').value;
    const confirmPassword = document.getElementById('resetConfirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    db.get(`user:${spireId}`)
        .then((user) => {
            user.password = newPassword;
            return db.put(user);
        })
        .then(() => {
            alert('Password reset successful');
            hideForgotPasswordForm();
        })
        .catch((err) => {
            if (err.name === 'not_found') {
                alert('User not found. Please register first.');
            } else {
                alert(`Error resetting password: ${err}`);
            }
        });
}

