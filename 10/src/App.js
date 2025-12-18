import './App.css';

function App() {

  const collegeName = "Muffakham Jah College";

  const links = (
    <div>
      <a href="#">Faculty</a><br />
      <a href="#">Staff</a><br />
      <a href="#">Students</a><br />
    </div>
  );

  const today = new Date();

  return (
    <div className="App">
      <h1>{collegeName}</h1>

      <h2 style={{ color: "blue" }}>CSE Department</h2>

      {links}

      <p>{today.toDateString()}</p>

      <h3>Mission</h3>

      <p>
        To mentor students towards a successful professional career in a
        global environment through quality education.
      </p>

      <p style={{ fontStyle: "italic", marginTop: "20px" }}>
        Designed by: 1604-22-733-121
      </p>
    </div>
  );
}

export default App;
