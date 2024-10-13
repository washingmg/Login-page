function togglePassword() {
    const passwordFields = [document.getElementById('password'), document.getElementById('repassword')];
    const toggleButton = document.querySelector('.toggle-password');

    passwordFields.forEach(passwordField => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text'; 
        } else {
            passwordField.type = 'password'; 
        }
    });

    toggleButton.textContent = toggleButton.textContent === '🙈' ? '👁️' : '🙈'; 
}

function validateForm(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;
    const messageDiv = document.getElementById('message');

    messageDiv.textContent = '';
    messageDiv.className = ''; 
    messageDiv.style.display = 'none'; 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.className = 'error'; 
        messageDiv.textContent = 'Por favor, insira um endereço de email válido.';
        messageDiv.style.display = 'block';
        return;
    }

    if (password !== repassword) {
        messageDiv.className = 'error'; 
        messageDiv.textContent = 'As senhas não coincidem. Por favor, tente novamente.';
        messageDiv.style.display = 'block';
        return;
    }

    if (password.length < 8) {
        messageDiv.className = 'error'; 
        messageDiv.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        messageDiv.style.display = 'block'; 
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        messageDiv.className = 'error'; 
        messageDiv.textContent = 'Este email já está registrado. Tente com outro.';
        messageDiv.style.display = 'block'; 
        return;
    }

    const hashedPassword = btoa(password);

    const newUser = {
        email: email,
        password: hashedPassword
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    messageDiv.className = 'success'; 
    messageDiv.textContent = 'Registro realizado com sucesso! Você será redirecionado para a página inicial.';
    messageDiv.style.display = 'block'; 


    setTimeout(() => {
        window.location.href = 'home.html'; 
    }, 2000); 
    document.getElementById('registerForm').reset();
}

document.getElementById('registerForm').addEventListener('submit', validateForm);
