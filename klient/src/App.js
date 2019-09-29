import React from "react";
import "./App.css";

// Components imports
import NedbetalingsplanContainer from "./components/nedbetalingsplan/NedbetalingplanContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Nedbetalingsplan!</header>
      <NedbetalingsplanContainer />
    </div>
  );
}

export default App;
