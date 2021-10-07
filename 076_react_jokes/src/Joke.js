import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      <h3
        className="question"
        style={{ display: props.question ? "block" : "none" }}
      >
        Question: {props.question}
      </h3>
      <h3 className="answer" style={{ display: !props.punchLine && "none" }}>
        Answer: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
