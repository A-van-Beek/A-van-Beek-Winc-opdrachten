/*
A: maak voor elke film in _database.js een tile aan in de HTML
B: maak deze loop afhankelijk van de keuze via de radio=buttons
c: maak een reset knop
*/
// const addMoviesToDom = movies.map((movie) => {
//   const allMovies = movie.Title;
//   console.log(allMovies);
// });

const addMoviesToDom = movies.forEach(movie => {
    const newLi = document.createElement("li");
    const newMovie = document.getElementsByClassName("films");
    newMovie.insertBefore(newLi, newMovie.getElementsByTagName("li")[movie]);
    newLi.innerHTML = allMovies   
});
.map((movie) => {
    const allMovies = movie.Title;
    console.log(allMovies);
  });


// function clickLion() {
//     const newLi = document.createElement("li");
//     const menuSpotted = document.getElementById("spotted-animals-list");
//     menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
//     newLi.innerHTML = "Lion";
//   }
