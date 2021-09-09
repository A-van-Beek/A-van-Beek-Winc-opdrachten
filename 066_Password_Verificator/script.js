// console.log("welkom bij het script");

document.getElementById("submit").addEventListener("click", inputPassword);

function inputPassword() {
  const requestedPassword = document.getElementById("password").value;
  //   console.log(requestedPassword);
  checkPassword(requestedPassword);
  //   console.log("deleting input");
  document.getElementById("password").value = "";
  //   console.log(`Na delete: ${document.getElementById("password").value}`);
}
