const newCommentHandler = async (event) => {
  event.preventDefault()
  const comment_text = document.querySelector('#comment-text').value.trim()
  const blog_id = document.querySelector('#blog_id').value

  if (comment_text) {
    const response = await fetch('/api/comment/', {
      method: 'POST',
      body: JSON.stringify({ comment_text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`)
    } else {
      alert('Failed to fetch blog post');
    }
  }
};

// Event listeners
document
.querySelector('.new-comment-form')
.addEventListener('submit', newCommentHandler);