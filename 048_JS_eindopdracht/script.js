/*
        functie die een nieuw li-element maakt.
*/
function createMenuItem(name) {
  const li = document.createElement("li");
  li.textContent = name;
  return li;
}

const addMoviesToDom = movies.map((movie) => {
  const newMovie = document.getElementById("movies"); //get <ul> element
  const allMovies = movie.Title; //get titel van nw movie
  newMovie.appendChild(createMenuItem(allMovies)).classList.add("tile");
});
