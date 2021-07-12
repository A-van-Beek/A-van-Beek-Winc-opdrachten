// console.log("He hallo, ik ben eerste");
// setTimeout(function () {
//   console.log("He hallo, ik ben tweede");
// }, 2000);
// console.log("He hallo, ik ben derde");

// // verwacht resultaat: 1, 3, 2

const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    var output = "";
    posts.forEach((post) => {
      //maak een li-element met de titel van het array.
      // let op: gebruik schuine, enkele aanhalingstekens
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("inputPosts").innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post three", body: "This is post three" }, getPosts);
