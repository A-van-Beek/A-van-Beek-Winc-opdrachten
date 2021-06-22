// /*
//         functie die een nieuw li-element maakt.
// */
// function createMenuItem(name) {
//   const li = document.createElement("li");
//   li.textContent = name;
//   return li;
// }

// const addMoviesToDom = movies.map((movie) => {
//   const newMovie = document.getElementById("movies"); //get <ul> element
//   const allMovies = movie.Title; //get titel van nw movie
//   newMovie.appendChild(createMenuItem(allMovies)).classList.add("tile");
// });

/*
        functie die in nieuw li-element het juiste img zet.
*/
// function myFunction() {
//   const x = document.createElement("IMG");
//   x.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg");
//   x.setAttribute("alt", "The Pulpit Rock");
//   document.body.appendChild(x);
// }

const addMoviesToDom = movies.map((movie) => {
  const newMovie = document.getElementById("movies"); //get <ul> element
  const newLi = document.createElement("li"); // create nw <li>
  newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
  const newImg = document.createElement("IMG"); // create nw <img>
  newImg.setAttribute("src", movie.Poster); //add link to <img>
  newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
  newLi.appendChild(newImg); //combine nw <img> in nw <li>
});
