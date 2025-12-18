import './App.css';

function App() {
  return (
    <div className="App">
      <UserDetails uname="Ameen" id={201} />
      <UserDetails uname="Sara" id={202} />

      <RegistrationForm />

      <StudentList />

      <ClickEvent />
    </div>
  );
}

// Props Demo
function UserDetails(props) {
  return (
    <div>
      <p>Name: {props.uname}</p>
      <p>ID: {props.id}</p>
    </div>
  );
}

// Form Demo
function RegistrationForm() {
  return (
    <form>
      Username: <input type="text" /><br />
      Email: <input type="email" /><br />
      Password: <input type="password" /><br />
      <input type="submit" value="Register" /><br />
      <input type="reset" value="Clear" /><br />
    </form>
  );
}

// List Demo
function StudentList() {
  const students = [
    { roll: 11, name: 'Tom' },
    { roll: 12, name: 'Jerry' },
    { roll: 13, name: 'Spike' },
    { roll: 14, name: 'Tyke' }
  ];

  return (
    <>
      <h2>Student Names</h2>
      <ol>
        {students.map((s) => (
          <li key={s.roll}>{s.name}</li>
        ))}
      </ol>
    </>
  );
}

// Event Demo
function ClickEvent() {
  const showMessage = () => {
    alert('Button Clicked!');
  };

  return <button onClick={showMessage}>Press Me</button>;
}

export default App;
