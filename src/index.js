import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/table";
import Settings from "./components/settings";
import { TableProvider } from "./model/context";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TableProvider>
      <Table />
      </TableProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
