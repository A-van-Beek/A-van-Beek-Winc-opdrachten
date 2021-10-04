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
    </div>
  );
}

export default App;
