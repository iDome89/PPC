import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/table";
import Settings from "./components/settings";
import { TableProvider } from "./model/context";
import "./styles.css";


// CR: Table provider je spis neco cim by mela byt obalena tabulka vevnitr - bez toho to fungovat nebude
// takhle zvetsujes komplexitu pouziti <Table /> componenty o to aby jsi muset vzdy pouzit provider
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


// CR: Neni tam jedina komponenta co by se dala pouzit jinak nez v tom jak je to ted napsane
// obrovska komplexita v jednom souboru
// Formatovani
