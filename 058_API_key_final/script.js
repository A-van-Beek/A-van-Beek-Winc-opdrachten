const genreUrl = movieDB + "/genre/movie/list?" + API_KEY_2 + taal_2;

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

//
// zoeken op zoektermen, is niet hoofdletter gevoelig
//
const keywordUrl =
  movieDB + "/search/movie?" + API_KEY_2 + taal_2 + "&query=Kangaroo+kid";

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

//
// zoeken op movie_id
//
const movieIdUrl = movieDB + "/movie/578?" + API_KEY_2 + taal_2;

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

//
// presenteer favoriet
//
const favorietUrl = movieDB + "/movie/577?" + API_KEY_2 + taal_2;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const favorietId = await getData(favorietUrl);
    document.getElementById("favoriet").innerHTML = favorietId.original_title;
  } catch (err) {
    console.log("Error! (favoriet)");
    console.log(err);
  }
});

//
// presenteer film via find vanuit andere database (in dit geval IMDb)
//
const findUrl =
  movieDB +
  "/find/tt1230545?" +
  API_KEY_2 +
  taal_2 +
  "&external_source=imdb_id";

// "https://api.themoviedb.org/3/find/tt1230545?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl&external_source=imdb_id";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const findId = await getData(findUrl);
    document.getElementById("findExternUrl").innerHTML =
      findId.movie_results[0].original_title;
  } catch (err) {
    console.log("Error! (findId)");
    console.log(err);
  }
});

//
// presenteer films op populariteit descending
//

const popularUrl =
  movieDB +
  "/discover/movie?" +
  API_KEY_2 +
  taal_2 +
  "&sort_by=popularity.desc" +
  "&include_adult=false" +
  "&include_video=false" +
  "&page=1";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const popularList = document.getElementById("popular");
    const popular = await getData(popularUrl);
    popular.results.forEach((result) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `${result.original_title}`;
      popularList.append(newLi);
    });
  } catch (err) {
    console.log("Error! (popularList)");
    console.log(err);
  }
});

//
// presenteer films uit 1975
//

const yearUrl =
  movieDB +
  "/discover/movie?" +
  API_KEY_2 +
  taal_2 +
  "&sort_by=popularity.desc" +
  "&primary_release_year=1975" +
  "&include_adult=false" +
  "&include_video=false" +
  "&page=1";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const yearList = document.getElementById("year");
    const year = await getData(yearUrl);
    year.results.forEach((result) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `${result.original_title}, ${result.release_date}`;
      yearList.append(newLi);
    });
  } catch (err) {
    console.log("Error! (yearList)");
    console.log(err);
  }
});
