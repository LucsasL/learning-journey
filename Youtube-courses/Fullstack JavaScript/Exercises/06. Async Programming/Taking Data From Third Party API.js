const btn = document.querySelector(".btn");
const idDiv = document.querySelector(".id");
const titleDiv = document.querySelector(".title");
const bodyDiv = document.querySelector(".body");

async function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json();
    })
    .then((data) => {
      const allPosts = document.querySelector(".all-posts");
      data.forEach((element) => {
        allPosts.innerHTML += `
          <div> ID: ${element.id}</div>
          <div> Title: ${element.title}</div>
          <div> Body: ${element.body}</div>
        `;
      });
    })
    .catch(error => console.error(error));
}

btn.addEventListener("click", makeRequest);
