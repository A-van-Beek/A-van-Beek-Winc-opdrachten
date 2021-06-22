// /**
//  laden van alle films:
//  */
// const addMoviesToDom = movies.map((movie) => {
//   const newMovie = document.getElementById("movies"); //get <ul> element
//   const newLi = document.createElement("li"); // create nw <li>
//   newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
//   const newImg = document.createElement("IMG"); // create nw <img>
//   newImg.setAttribute("src", movie.Poster); //add link to <img>
//   newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
//   newLi.appendChild(newImg); //combine nw <img> in nw <li>
// });

// /*
//     selectie nieuwste films
//  */
// const addMoviesToDom = movies.map((movie) => {
//   if (movie.Year >= 2014) {
//     const newMovie = document.getElementById("movies"); //get <ul> element
//     const newLi = document.createElement("li"); // create nw <li>
//     newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
//     const newImg = document.createElement("IMG"); // create nw <img>
//     newImg.setAttribute("src", movie.Poster); //add link to <img>
//     newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
//     newLi.appendChild(newImg); //combine nw <img> in nw <li>
//   }
// });

/*
    selectie Avenger in titel
 */
const addMoviesToDom = movies.map((movie) => {
  if (movie.Title.includes("Avenger")) {
    const newMovie = document.getElementById("movies"); //get <ul> element
    const newLi = document.createElement("li"); // create nw <li>
    newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
    const newImg = document.createElement("IMG"); // create nw <img>
    newImg.setAttribute("src", movie.Poster); //add link to <img>
    newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
    newLi.appendChild(newImg); //combine nw <img> in nw <li>
  }
});
