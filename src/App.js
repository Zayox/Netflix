import './App.css';
import React from 'react';
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
        <p>Hello wor ld</p>
        <Row title="NETFLIX ORIGINALS" />
        <Row title="Trending Now" />
    </div>
  );
}

export default App;
