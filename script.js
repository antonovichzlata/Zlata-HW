const asideDOM = document.querySelector('.aside');
const postDataDOM = document.querySelector('.post-data');
const postCommentsDOM = document.querySelector('.post-comments');

async function getPostDetails(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.dir(response)
            if (!response.ok) throw Error('not OK')
            return response.json()
        })
        .then(postData => {
            // console.dir(postData)
            postDataDOM.innerHTML = '';
            postDataDOM.insertAdjacentHTML('beforeend', `
            <div class="post-content">
                <h1 class="post-title">${postData.title}</h1>

                <p class="post-body">
                    ${postData.body}
                </p>
            </div>
        `)
        })
        .catch(err => console.log(err))
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => {
            console.dir(response)
            if (!response.ok) throw Error('not OK')
            return response.json()
        })
        .then(commentsData => {
            // console.dir(commentsData)
            postCommentsDOM.innerHTML = '';
            commentsData.forEach(comment => {
                postCommentsDOM.insertAdjacentHTML('beforeend', `
                <div class="comment">
                <h3 class="comment-name">${comment.name}</h3>

                <p class="comment-body">
                    ${comment.body}
                </p>

                <p class="comment-email">
                    ${comment.email}
                </p>
                </div>
                `);
            });
        })
        .catch(err => console.log(err))
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET"
})
    .then(response => {
        console.dir(response)
        if (!response.ok) throw Error('not OK')
        return response.json()
    })
    .then(posts => {
        console.log(posts)
        posts.forEach(post => {
            asideDOM.insertAdjacentHTML('beforeend', `
            <div class="post-preview" onclick="getPostDetails(${post.id})">

            <h2 class="post-preview-title">
            ${post.title}
            </h2>
            
            <p class="post-preview-body">
            ${post.body.slice(0, 17)}...
            </p>
            </div>
            `)
        });
    })
    .catch(err => console.log(err))