const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const genresList = document.getElementById("genres");
    const genres = await getData(genreUrl);
    genres.genres.forEach((genre) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `Genre: ${genre.name}, Id: ${genre.id}`;
      genresList.append(newLi);
    });
  } catch (err) {
    console.log("Error! (genresList)");
    console.log(err);
  }
});
