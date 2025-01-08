let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts() {
    const postsSection = document.getElementById("posts-section");
    
    postsSection.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        postsSection.innerHTML += `
            <div class="single-post-container" data-index="${i}">
                <div class="post-header">
                    <img class="post-avatar" src="${posts[i].avatar}" alt="portrait of person posting">
                    <div class="post-header-text">
                        <h2 class="name">${posts[i].name}</h2>                                
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}" alt="painting by the artist posting">
                <div class="post-footer">
                    <div class="icons">
                        <img class="icon" id="heart-icon" src="images/icon-heart.png" alt="heart">
                        <img class="icon" id="comment-icon" src="images/icon-comment.png" alt="comment">
                        <img class="icon" id="dm-icon" src="images/icon-dm.png" alt="direct message">
                    </div>
                    <h3 class="likes">${posts[i].likes} likes</h3>
                    <p class="comment"><span class="username">${posts[i].username}</span> 
                    ${posts[i].comment}</p>
                </div>
            </div>
        `
    }
}

function postClickEventListener() {
    const clickablePosts = document.querySelectorAll(".single-post-container");
    
    clickablePosts.forEach(clickablePost => {
        clickablePost.addEventListener("click", function() {
            const postIndex = parseInt(clickablePost.getAttribute("data-index"));
            boostLikes(postIndex);
        })
    })
}

function boostLikes(postIndex) {
    posts[postIndex].likes += 1;
    
    const postElement = document.querySelector(`[data-index="${postIndex}"]`);
    const likesElement = postElement.querySelector(".likes");
    
    likesElement.textContent = `${posts[postIndex].likes} likes`;
}

function init() {
    renderPosts();
    postClickEventListener();
}

init();