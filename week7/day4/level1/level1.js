async function handpost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');

        if (!response.ok) {
            throw new Error("Post not found");
        }

        const post = await response.json();

        console.log("Single Post:", post);
        console.log("Title:", post.title);

    } catch (error) {
        console.error("ERROR:", error.message);
    }
}

handpost();