function togglePassword(button) {
    const passwordFields = [
        document.getElementById('password'), 
        document.getElementById('confirmPassword')
    ];
    
    passwordFields.forEach(field => {
        if (field) {
            field.type = field.type === 'password' ? 'text' : 'password';
        }
    });

    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.textContent = btn.textContent === '🙈' ? '👁️' : '🙈';
    });
}

function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    messageDiv.textContent = '';
    messageDiv.className = 'message';
    messageDiv.style.display = 'none';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Passwords do not match. Please try again.', 'error');
        return;
    }

    if (password.length < 8) {
        showMessage('Password must be at least 8 characters long.', 'error');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        showMessage('This email is already registered. Please use another one.', 'error');
        return;
    }

    const newUser = {
        email: email,
        password: btoa(password) 
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Registration successful! Redirecting to login page...', 'success');

    setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    }

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            togglePassword(this);
        });
    });

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', validateForm);
    }
});