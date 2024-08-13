const handleSignins = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#username-signin').value.trim();
    const password = document.querySelector('#password-signin').value.trim();

    if (username && password) {
        const reply = await fetch('api/accounts/signin', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (reply.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(reply.statusText);
        }
    }
}

const handleSignups = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const reply = await fetch('api/accounts', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (reply.status === 201 || reply.ok) {
            document.location.replace('/dashboard');
        } else {
            console.error('Failed to sign up:', reply.statusText);
            alert(reply.statusText);
    }
}}

document.querySelector('.signin-form').addEventListener('click', handleSignins);
document.querySelector('.signup-form').addEventListener('click', handleSignups);