import React from "react";
// Library Imports

// Local Imports
import RoutesWrapper from "./routes/index";
import { ContextProvider } from "./ContextStore/DataContext";

// Style Imports
import "./App.scss";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <RoutesWrapper />
      </div>
    </ContextProvider>
  );
}

export default App;
