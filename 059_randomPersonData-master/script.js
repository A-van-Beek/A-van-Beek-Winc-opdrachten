// maak array met landen

// hier het script
var regionList = [];
var uniqueRegion = [];

landenlijst.addEventListener("click", createRegionList);

function createRegionList() {
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
