// // eenvoudige fetch, met opmerkingen/uitleg
// fetch("https://swapi.dev/api/people/1/") //doe request
//   .then((response) => response.json()) //zet de response om naar json
//   .then((data) => console.log(data)) //log de data naar de console
//   .catch((error) => {
//     //als er een error als response is, dan ...
//     console.log(error);
//   });

function makeRequest(location) {
  return new Promise((Resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      Resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}
// makeRequest("Google")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork(input) {
  try {
    const response = await makeRequest(input);
    console.log("Response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork("Google");
