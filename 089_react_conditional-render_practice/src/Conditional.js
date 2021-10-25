import React from "react";

// function Conditional(props) {
//   if (props.isLoading === true) {
//     return <h1>Loading...</h1>;
//   } else {
//     return <h1>Some cool stuff about conditional rendering</h1>;
//   }
// }

// // bovenstaande kan je verkorten door impliciete else te gebruiken:
// function Conditional(props) {
//   if (props.isLoading === true) {
//     return <h1>Loading...</h1>;
//   }
//   return <h1>Some cool stuff about conditional rendering</h1>;
// }

//maar gebruikelijker is de volgende syntax:
// condition ? statement if true : statement if false

function Conditional(props) {
  return (
    <div>
      <h3>Navbar</h3>
      {props.isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Some cool stuff about conditional rendering</h1>
      )}
      <h3>Footer</h3>
    </div>
  );
}

export default Conditional;
