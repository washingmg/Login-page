function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.textContent = '👁️'; 
    } else {
        passwordField.type = 'password';
        passwordToggle.textContent = '🙈'; 
    }
}

function validateLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    messageDiv.textContent = '';
    messageDiv.className = ''; 

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === btoa(password));

    if (user) {
        messageDiv.textContent = 'Login bem-sucedido!';
        messageDiv.classList.add('success'); 
        messageDiv.style.display = 'block'; 

        setTimeout(() => {
            window.location.href = 'home.html'; 
        }, 1000);
    } else {
        messageDiv.textContent = 'Email ou senha incorretos.';
        messageDiv.classList.add('error'); 
        messageDiv.style.display = 'block';
    }
}


document.getElementById('submit').addEventListener('click', validateLogin);
