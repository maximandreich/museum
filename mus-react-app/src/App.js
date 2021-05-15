import logo from './logo.svg';
import './App.css';
import React from "react";
import List from './components/list.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of excursions for the week</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <List/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
