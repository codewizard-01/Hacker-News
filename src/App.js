import "./App.css";
import React, { Component } from "react";
import Profile from "./assets/images/pic.jpg";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    let helloWorld = "Welcome to the road to learn react";
    const profileStyle = { width: "100px", borderRadius: "50%" };
    return (
      <div className="App">
        <h1>HackerNews</h1>
        <p>{helloWorld}</p>
        <div style={{ width: "800px", margin: "auto" }}>
          <table>
            <tr>
              <td>
                <img src={Profile} style={profileStyle} />
              </td>
              <td>Esmatullah</td>
              <td>Hadi</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
