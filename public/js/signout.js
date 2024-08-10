const signOut = async () => {
    const reply = await fetch('api/users/signout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (reply.ok) {
        document.location.replace('/');
    } else {
        alert(reply.statusText)
    }
};

document.querySelector('#signout').addEventListener('click', signOut);