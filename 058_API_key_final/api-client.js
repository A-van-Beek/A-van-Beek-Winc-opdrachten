const API_KEY = "cde09870aeadbfab23c4cd701f2bf88b";
const API_KEY_2 = "api_key=cde09870aeadbfab23c4cd701f2bf88b";
const taal = "nl";
const taal_2 = "&language=nl";
const movieDB = "https://api.themoviedb.org/3";

// getData
async function getData(url) {
  const response = await fetch(url)
    .then((answer) => answer.json())
    .catch((err) => console.log(err));
  // console.log(response); //laat resultaat zien in console
  return response;
}
