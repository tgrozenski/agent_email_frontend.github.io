const loginButton = document.getElementById('login-btn');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href =
            'https://tgrozenski.github.io/agent_email_frontend.github.io/login.html';
    });
}

const oAuthButton = document.getElementById('oAuth-btn');
if (oAuthButton) {
    oAuthButton.addEventListener('click', () => {
        console.log('Google button clicked!');
    });
}