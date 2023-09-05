# Network Requests

Using async and await, implement the necessary code to perform an HTTP POST request. To create a new post, use the following URL: [link](https://jsonplaceholder.typicode.com/posts) (Method: Post). The body of the request must contain a post object with the following information: title and Flag Completed. The post data must be transmitted following the compilation of a form.

  <script>
async function createPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // Define the post object with the required information
  const postObject = {
    title: "Your Post Title",
    body: "Flag Completed", // Assuming this is the "body" property
    userId: 1, // You can change the userId as needed
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObject),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("New Post Created:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to create a new post
createPost();

  </script>
