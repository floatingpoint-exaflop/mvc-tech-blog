const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const blog_text = document.querySelector('#blog-text').value.trim();
  const id = document.querySelector('#blog-title').getAttribute('data-id');

  if (title && blog_text) {
    let response;
    if (id) {
      // Update the existing post
      response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, blog_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // Create a new post
      response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, blog_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(`Failed to ${id ? 'update' : 'create'} blog post`);
    }
  }
};

// Edit button handler
const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Fetch the existing post data
    const response = await fetch(`/api/blog/${id}`, {
      method: 'GET',
    });
    if (response.ok) {
      const blog = await response.json();

      // Populate the form fields with the existing data
      document.querySelector('#blog-title').value = blog.title;
      document.querySelector('#blog-text').value = blog.blog_text;

      // Store the blog ID in a hidden input or in a variable
      document.querySelector('#blog-title').setAttribute('data-id', id);

      // Change the form submit button text to "Update"
      document.querySelector('.new-blog-form button').textContent = 'Update';
      
    } else {
      alert('Failed to fetch blog post');
    }
  }
};

const newCommentHandler = async (event) => {
  event.preventDefault()
  const comment_text = document.querySelector('#comment-text').value.trim()
  const blog_id = document.querySelector('#comment-text').value.trim() = document.querySelector('#blog_id').value

  if (comment_text) {
    const response = await fetch('/api/comment/', {
      method: 'POST',
      body: JSON.stringify({ comment_text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      document.location.replace(`blog/${blog_id}`)
    } else {
      alert('Failed to fetch blog post');
    }
  }
};

// Delete button handler
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog post');
    }
  }
};

// Event listeners
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
.querySelector('.new-comment-form')
.addEventListener('submit', newCommentHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      editButtonHandler(event);
    } else if (event.target.classList.contains('btn-danger')) {
      delButtonHandler(event);
    }
  });