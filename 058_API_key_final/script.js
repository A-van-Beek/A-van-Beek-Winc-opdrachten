const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${taal}`;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const genresList = document.getElementById("genres");
    const genres = await getData(genreUrl);
    // console.log(genres.genres[1].name);
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

// //
// zoeken op zoektermen
// niet hoofdletter gevoelig
const keywordUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=cde09870aeadbfab23c4cd701f2bf88b&query=Kangaroo+kid&language=nl";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const keywordList = document.getElementById("keyword");
    const keywords = await getData(keywordUrl);
    keywords.results.forEach((result) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `Originele titel: ${result.original_title}, release datum ${result.release_date}`;
      keywordList.append(newLi);
    });
  } catch (err) {
    console.log("Error! (keywordList)");
    console.log(err);
  }
});

// //
// zoeken op movie_id
//
const movieIdUrl =
  "https://api.themoviedb.org/3/movie/578?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const movieIdList = document.getElementById("movie_id");
    const movieId = await getData(movieIdUrl);
    let newLi = document.createElement("li");
    newLi.innerHTML = `Titel: ${movieId.original_title}, id: ${movieId.id}`;
    movieIdList.append(newLi);
  } catch (err) {
    console.log("Error! (movieIdList)");
    console.log(err);
  }
});
