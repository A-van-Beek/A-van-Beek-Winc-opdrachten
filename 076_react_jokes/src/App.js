import "./App.css";
import Joke from "./Joke";

function App() {
  return (
    <div className="jokes">
      <Joke
        joke={{
          question: "What is a good joke?",
          punchline: "The one that makes you laugh",
          imgUrl: "http://placekitten.com/300/200",
        }}
      />
      <Joke
        joke={{
          question: "What's the best thing aboud Switzerland ?",
          punchline: "I don't know, but the flag is a big plus.",
          imgUrl: "http://placekitten.com/300/200",
        }}
      />
      <Joke
        joke={{
          question:
            "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
          imgUrl: "http://placekitten.com/300/200",
        }}
      />
    </div>
  );
}

export default App;
