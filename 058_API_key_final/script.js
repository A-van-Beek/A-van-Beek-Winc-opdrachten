// const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${taal}`;

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const genresList = document.getElementById("genres");
//     const genres = await getData(genreUrl);
//     // console.log(genres.genres[1].name);
//     genres.genres.forEach((genre) => {
//       let newLi = document.createElement("li");
//       newLi.innerHTML = `Genre: ${genre.name}, Id: ${genre.id}`;
//       genresList.append(newLi);
//     });
//   } catch (err) {
//     console.log("Error! (genresList)");
//     console.log(err);
//   }
// });

// // //
// // zoeken op zoektermen
// // niet hoofdletter gevoelig
// const keywordUrl =
//   "https://api.themoviedb.org/3/search/movie?api_key=cde09870aeadbfab23c4cd701f2bf88b&query=Kangaroo+kid&language=nl";

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const keywordList = document.getElementById("keyword");
//     const keywords = await getData(keywordUrl);
//     keywords.results.forEach((result) => {
//       let newLi = document.createElement("li");
//       newLi.innerHTML = `Originele titel: ${result.original_title}, release datum ${result.release_date}`;
//       keywordList.append(newLi);
//     });
//   } catch (err) {
//     console.log("Error! (keywordList)");
//     console.log(err);
//   }
// });

// // //
// // zoeken op movie_id
// //
// const movieIdUrl =
//   "https://api.themoviedb.org/3/movie/578?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl";

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const movieIdList = document.getElementById("movie_id");
//     const movieId = await getData(movieIdUrl);
//     let newLi = document.createElement("li");
//     newLi.innerHTML = `Titel: ${movieId.original_title}, id: ${movieId.id}`;
//     movieIdList.append(newLi);
//   } catch (err) {
//     console.log("Error! (movieIdList)");
//     console.log(err);
//   }
// });

// // //
// // presenteer favoriet
// //
// const favorietUrl =
//   "https://api.themoviedb.org/3/movie/577?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl";

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const favorietId = await getData(favorietUrl);
//     document.getElementById("favoriet").innerHTML = favorietId.original_title;
//   } catch (err) {
//     console.log("Error! (favoriet)");
//     console.log(err);
//   }
// });

// //
// presenteer film via find vanuit andere database (in dit geval IMDb)
//
const findUrl =
  "https://api.themoviedb.org/3/find/tt1230545?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl&external_source=imdb_id";

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

// //
// presenteer films op populariteit descending
//

const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=cde09870aeadbfab23c4cd701f2bf88b&language=nl&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const popularList = document.getElementById("popular");
    const popular = await getData(popularUrl);
    console.log(popular.results[0].original_title);
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
