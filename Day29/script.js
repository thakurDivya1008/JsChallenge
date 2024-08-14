document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.dashboard-container').style.display = 'block';
    displayPosts();
});

const posts = JSON.parse(localStorage.getItem('posts')) || [];

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').value;

    const post = {
        username: localStorage.getItem('username'),
        text: postText,
        image: postImage,
        likes: 0,
        comments: [],
        timestamp: new Date().toLocaleString()
    };

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    this.reset();
});

function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post' + (post.username === localStorage.getItem('username') ? ' mine' : '');

        postElement.innerHTML = `
            <h4>${post.username}</h4>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image">` : ''}
            <div class="actions">
                <button onclick="likePost(${index})">Like (${post.likes})</button>
                <button onclick="commentPost(${index})">Comment (${post.comments.length})</button>
            </div>
            <p class="timestamp">${post.timestamp}</p>
        `;

        postFeed.appendChild(postElement);
    });
}

function likePost(index) {
    posts[index].likes++;
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

function commentPost(index) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        posts[index].comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }
}