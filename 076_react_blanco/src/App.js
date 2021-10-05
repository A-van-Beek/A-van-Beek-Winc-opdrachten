import "./App.css";

function App() {
  const myItem = "test-tekst";
  const myList = [
    {
      question: "What is a good joke?",
      punchline: "The one that makes you laugh",
    },
    {
      question: "Waarom?",
      punchline: "daarom....",
    },
  ];
  return (
    <div>
      <h1>testing</h1>
      <h2>ondertitel</h2>
      {myItem}
      {myList.forEach((item) => console.log(item.question))}
      {myList.forEach((item) => item.question)}
    </div>
  );
}

export default App;
