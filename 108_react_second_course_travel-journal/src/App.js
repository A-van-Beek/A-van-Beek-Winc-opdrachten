import "./App.css";
import Navbar from "./components/Navbar";
import data from "./components/data.js";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
