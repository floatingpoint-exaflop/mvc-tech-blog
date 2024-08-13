const makeNewPost = async (e) => {
    e.preventDefault();
    const title = document.querySelector('#blog-title').value.trim();
    const text = document.querySelector('#blog-text').value.trim();
    const user_id = document.querySelector('#blog-author').value.trim()

    if (title && text && user_id) {
        const reply = await fetch (`/api/blogposts`, {
            method: 'POST',
            body: JSON.stringify({title, text, user_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (reply.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Blog post could not be created successfully and was not posted.')
        }
    }
}

const deleteYourPost = async (e) => {
    if (e.target.hasAttribute('blogpost-id')) {
        const blogpost_id = e.target.getAttribute('blogpost-id')
    
    const reply = await fetch(`/api/blogposts/${blogpost_id}`, {
        method: 'DELETE'
    })
        if (reply.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Blog post could not be deleted.')
        }
    }
}


const makeNewComment = async (e) => {
    e.preventDefault();
    const blogpost_id = document.querySelector('#comment-title').value.trim();
    const text = document.querySelector('#comment-text').value.trim();
    const user_id = document.querySelector('#comment-author').value.trim()

    if (blogpost_id && text && user_id) {
        const reply = await fetch (`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({blogpost_id, text, user_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (reply.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Comment could not be created successfully and was not posted.')
        }
    }
}

document.querySelector('.new-blogpost-form').addEventListener('submit', makeNewPost);
document.querySelector('.blogpost-list').addEventListener('click', deleteYourPost);
document.querySelector('.new-comment-form').addEventListener('submit', makeNewComment);