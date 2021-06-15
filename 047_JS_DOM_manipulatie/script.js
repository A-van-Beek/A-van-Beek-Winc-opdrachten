/*
Deel 1:
- verwijder dubbele opdrachtregels
*/

const bigFive = document.getElementsByClassName("big-five-list-item");
const lion = bigFive[0];
const leopard = bigFive[1];
const elephant = bigFive[2];
const rhino = bigFive[3];
const buffalo = bigFive[4];

lion.addEventListener("click", clickLion);

function clickLion() {
  const newLi = document.createElement("li");
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
  newLi.innerHTML = "Lion";
}

leopard.addEventListener("click", clickLeopard);

function clickLeopard() {
  const newLi = document.createElement("li");
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
  newLi.innerHTML = "Leopard";
}

elephant.addEventListener("click", clickElephant);

function clickElephant() {
  const newLi = document.createElement("li");
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
  newLi.innerHTML = "Elephant";
}

rhino.addEventListener("click", clickRhino);

function clickRhino() {
  const newLi = document.createElement("li");
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
  newLi.innerHTML = "Rhino";
}

buffalo.addEventListener("click", clickBuffalo);

function clickBuffalo() {
  const newLi = document.createElement("li");
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.insertBefore(newLi, menuSpotted.getElementsByTagName("li")[0]);
  newLi.innerHTML = "Buffalo";
}

/*
Deel 2:
- remove first item spotted list
*/

const removeFirst = document.getElementById("remove-first-item-button");
removeFirst.addEventListener("click", clickRemove);

function clickRemove() {
  const menuSpotted = document.getElementById("spotted-animals-list");
  menuSpotted.removeChild(menuSpotted.childNodes[0]);
}

/*
Deel 3:
- remove all spotted animals
*/
const removeAllSpotted = document.getElementById("remove-all-button");
removeAllSpotted.addEventListener("click", clickRemoveAll);

function clickRemoveAll() {
  const menuSpotted = document.getElementById("spotted-animals-list");
  // menuSpotted.removeChild(menuSpotted.childNodes[0]);
  menuSpotted.innerHTML = "";
}
