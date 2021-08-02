// maak array met landen

var regionList = [];
var uniqueRegion = [];

landenlijst.addEventListener("click", createRegionList);

function createRegionList() {
  // reset lijsten
  resetLists();
  // create list regions
  randomPersonData.forEach((person) => {
    regionList.push(person.region);
  });
  // ondubbelen
  var uniqueRegion = [...new Set(regionList)];
  // sort
  uniqueRegion.sort();
  uniqueRegion.forEach((region) => {
    const newLi = document.createElement("li");
    const menuAlleLanden = document.getElementById("landen");
    menuAlleLanden.appendChild(
      newLi,
      menuAlleLanden.getElementsByTagName("li")[0]
    );
    newLi.innerHTML = region;
  });
}

// lijst steenbok-vrouwen
var steenbokArray = [];

steenbokvrouwen.addEventListener("click", createSteenbokVrouwen);

function createSteenbokVrouwen() {
  // reset lijsten
  resetLists();
  randomPersonData.forEach((person) => {
    const myMonth = person.birthday.dmy.substring(3, 5); //beginpositie, eindpositie
    const myDay = person.birthday.dmy.substring(0, 2);
    if (
      person.age >= 30 &&
      person.gender === "female" &&
      getxingzuo(myMonth, myDay) === "Steenbok"
    ) {
      steenbokArray.push(person.name + " " + person.surname);
    }
  });
  steenbokArray.forEach((steenbokVrouw) => {
    const newLi = document.createElement("li");
    const steenbokList = document.getElementById("steenbokvrouw");
    steenbokList.appendChild(newLi, steenbokList.getElementsByTagName("li")[0]);
    newLi.innerHTML = steenbokVrouw;
  });
}

function getxingzuo(myMonth, myDay) {
  var d = new Date(1999, myMonth - 1, myDay, 0, 0, 0);
  var arr = [];
  arr.push(["Steenbok", new Date(1999, 0, 1, 0, 0, 0)]);
  arr.push(["Waterman", new Date(1999, 0, 20, 0, 0, 0)]);
  arr.push(["Vissen", new Date(1999, 1, 19, 0, 0, 0)]);
  arr.push(["Ram", new Date(1999, 2, 21, 0, 0, 0)]);
  arr.push(["Stier", new Date(1999, 3, 21, 0, 0, 0)]);
  arr.push(["Tweelingen", new Date(1999, 4, 21, 0, 0, 0)]);
  arr.push(["Kreeft", new Date(1999, 5, 22, 0, 0, 0)]);
  arr.push(["Leeuw", new Date(1999, 6, 23, 0, 0, 0)]);
  arr.push(["Maagd", new Date(1999, 7, 23, 0, 0, 0)]);
  arr.push(["Weegschaal", new Date(1999, 8, 23, 0, 0, 0)]);
  arr.push(["Schorpioen", new Date(1999, 9, 23, 0, 0, 0)]);
  arr.push(["Boogschutter", new Date(1999, 10, 22, 0, 0, 0)]);
  arr.push(["Steenbok", new Date(1999, 11, 22, 0, 0, 0)]);
  for (var i = arr.length - 1; i >= 0; i--) {
    if (d >= arr[i][1]) return arr[i][0];
  }
}
// reset info
function resetLists() {
  document.getElementById("landen").innerHTML = "";
  document.getElementById("steenbokvrouw").innerHTML = "";
}
