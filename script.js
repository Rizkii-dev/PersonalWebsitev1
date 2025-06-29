document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('li');
        newComment.textContent = `${name}: ${message}`;
        commentsList.appendChild(newComment);

        this.reset();
    }
});
