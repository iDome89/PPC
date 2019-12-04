import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/table"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
