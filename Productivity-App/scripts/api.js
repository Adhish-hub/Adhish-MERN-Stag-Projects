//Main Api Page 
//using Axios for fetching api 
//also use Promise and (.then)


// Base API URL used for all requests
const BASE_URL = "https://jsonplaceholder.typicode.com";


//Fetch all posts from API (Get)
async function getPosts() {
    // Send GET request to /posts endpoint
    const res = await fetch(`${BASE_URL}/posts`);
    if (!res.ok) {
        throw new Error(`Failed to load posts: ${res.status}`);
    }
    // Convert response to JSON and return
    return await res.json();
}
//Fetch single post by ID
async function getPost(id) {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to load post ${id}: ${res.status}`);
    }
    return await res.json();
}

//Create a new post(Post)
async function createPost(data) {
    // Send POST request with JSON body
    const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Failed to create post: ${res.status}`);
    }
    return await res.json();
}

//Update an existing post
async function updatePost(id, data) {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        //Send PUT request to update post
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Failed to update post ${id}: ${res.status}`);
    }
    return await res.json();
}
// Delete a post by ID
async function deletePost(id) {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) {
        throw new Error(`Failed to delete post ${id}: ${res.status}`);
    }
    return true;
}

// Escape text for safe HTML rendering
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Load posts and render them in UI
async function loadPosts() {
    //Get container element
    const apiDataDiv = document.getElementById("apiData");
    //If element not found, stop execution
    if (!apiDataDiv) {
        console.warn("No #apiData element found in the page.");
        return;
    }
    // Show loading text
    apiDataDiv.textContent = "Loading...";

    try {
        const posts = await getPosts();
        apiDataDiv.innerHTML = posts.slice(0, 6).map(post => {
            return `
                <article class="api-post">
                    <h2>${escapeHtml(post.title)}</h2>
                    <p>${escapeHtml(post.body)}</p>
                </article>
            `;
        }).join("");
    } catch (error) {
        apiDataDiv.innerHTML = `<p class="api-error">Error loading posts: ${escapeHtml(error.message)}</p>`;
    }
}
// Run loadPosts when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadPosts);
