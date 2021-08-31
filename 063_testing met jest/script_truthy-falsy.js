const somevar = "";

if (somevar) {
  console.log(`do something with the value of somevar: ${somevar}.`);
} else {
  console.log(
    `do nothing, somevar = falsy (false, null, undefined, 0, NaN, empty string).`
  );
}
