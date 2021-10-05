import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      <img src={props.joke.imgUrl} alt="alt-tekst" />
      <h3>{props.joke.question}</h3>
      <h4>{props.joke.punchline}</h4>
    </div>
  );
}

export default Joke;
