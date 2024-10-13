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