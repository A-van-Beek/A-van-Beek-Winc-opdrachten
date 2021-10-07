import "./App.css";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  return <div className="jokes">{jokeComponents}</div>;
}

export default App;
