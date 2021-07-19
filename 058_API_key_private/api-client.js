const API_KEY = "cde09870aeadbfab23c4cd701f2bf88b";
// getData
async function getData(url) {
  const response = await fetch(url)
    .then((answer) => answer.json())
    .catch((err) => console.log(err));
  console.log(response); //laat resultaat zien in console
  return response;
}
