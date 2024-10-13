function togglePassword() {
    const passwordFields = [document.getElementById('password'), document.getElementById('repassword')];
    passwordFields.forEach(passwordField => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });

    const toggleButton = document.querySelector('.toggle-password');
    if (toggleButton.textContent === '👁️') {
        toggleButton.textContent = '🙈';
    } else {
        toggleButton.textContent = '👁️';
    }
}
