import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  name = "Rohit Sharma";

  render() {
    return (
      <>
        <div>
          <h1>This is {this.name}</h1>
        </div>
        <div>
          <p>This is a paragraph about {this.name}</p>
        </div>
      </>
    );
  }
}

export default App;
