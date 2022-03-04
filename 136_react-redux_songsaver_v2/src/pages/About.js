import Nav from "../components/Nav";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <section>
        <h1>Hier tekst over de app</h1>
        <div>en hier de verdere uitleg</div>
      </section>
    </div>
  );
}
