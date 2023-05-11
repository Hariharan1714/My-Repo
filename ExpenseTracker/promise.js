// Function to simulate creating a post
async function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating successful post creation
            console.log(`Post created: ${post}`);
            resolve();
        }, 1000);
    });
}

// Function to simulate deleting a post
async function deletePost(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating successful post deletion
            console.log(`Post deleted: ${postId}`);
            resolve();
        }, 1000);
    });
}

// Function to simulate getting cold drinks
async function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating getting cold drinks
            console.log('Got cold drinks!');
            resolve();
        }, 1000);
    });
}

// Function to handle the entire process with async/await
async function handlePostCreationAsync(userId, post) {
    try {
        // Create post
        await createPost(post);

        // Update last user activity time
        await updateLastUserActivityTime(userId);

        // Get cold drinks
        await getColdDrinks();

        // Delete last post
        await deletePost(post);

        // Log new set of posts
        console.log(`New set of posts for user with ID: ${userId}`);
    } catch (err) {
        // Handle any errors
        console.error(err);
    }
}

// Function to handle the entire process with promises
function handlePostCreationPromise(userId, post) {
    // Create post
    createPost(post)
        .then(() => {
            // Update last user activity time
            return updateLastUserActivityTime(userId);
        })
        .then(() => {
            // Get cold drinks
            return getColdDrinks();
        })
        .then(() => {
            // Delete last post
            return deletePost(post);
        })
        .then(() => {
            // Log new set of posts
            console.log(`New set of posts for user with ID: ${userId}`);
        })
        .catch(err => {
            // Handle any errors
            console.error(err);
        });
}

// Example usage with async/await
const userId = 1;
const post = 'This is a new post';
handlePostCreationAsync(userId, post);

// Example usage with promises
const userId2 = 2;
const post2 = 'Another new post';
handlePostCreationPromise(userId2, post2);
