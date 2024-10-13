function displayEmails() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailList = document.getElementById('emailList');
    const messageDiv = document.getElementById('message');

    emailList.innerHTML = '';

    if (users.length === 0) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Nenhum email registrado encontrado.';
        return;
    }

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.email; 
        emailList.appendChild(li);
    });

    messageDiv.className = 'message success';
    messageDiv.textContent = 'Emails carregados com sucesso!';
}

window.onload = displayEmails;
