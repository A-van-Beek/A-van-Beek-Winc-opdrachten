function MyNavbar() {
  return (
    <nav className="nav">
      <h1>website name</h1>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function MyContent() {
  return <h1>hier mijn eigen tekst</h1>;
}

ReactDOM.render(
  <div>
    <MyNavbar />
    <MyContent />
  </div>,
  document.getElementById("root")
);
