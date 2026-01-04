import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [],
      internalMarks: [],
      externalMarks: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/students")
      .then(res => res.json())
      .then(result => {
        this.setState({ studentData: result });
      });
  }

  showInternalMarks = () => {
    fetch("http://localhost:8080/imarks")
      .then(res => res.json())
      .then(result => {
        this.setState({ internalMarks: result });
      });
  };

  showExternalMarks = () => {
    fetch("http://localhost:8080/emarks")
      .then(res => res.json())
      .then(result => {
        this.setState({ externalMarks: result });
      });
  };

  render() {
    const { studentData, internalMarks, externalMarks } = this.state;

    return (
      <div className="App">
        <h1>Student Marks Information</h1>

        <button onClick={this.showInternalMarks}>
          Show Internal Marks
        </button>

        <button onClick={this.showExternalMarks}>
          Show External Marks
        </button>

        <br /><br />

        <table border="1" align="center">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Internal Marks</th>
              <th>External Marks</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {studentData.map(s => (
                  <div key={s.id}>{s.name}</div>
                ))}
              </td>

              <td>
                {internalMarks.map(i => (
                  <div key={i.id}>{i.marks}</div>
                ))}
              </td>

              <td>
                {externalMarks.map(e => (
                  <div key={e.id}>{e.marks}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
