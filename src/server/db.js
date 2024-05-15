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
    const userId = `user:${spireId}`;

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
                window.location.href = '/home';
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
