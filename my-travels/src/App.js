import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>

        <Travel
          destination="Paris"
          country="France"
          photo="https://images.theconversation.com/files/180596/original/file-20170801-11176-53ryz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          distance="600 km"

        />

        <Travel
          destination="Tokyo"
          country="Japon"
          photo="https://www.japan-guide.com/thumb/destination_tokyo.jpg"
          distance="10 000 km"

        />
      </div>
    );
  }
}

export default App;